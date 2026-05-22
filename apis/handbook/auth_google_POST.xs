//  POST /api/handbook/auth/google
//  Receives a Google-verified identity from the Handbook app's server route
//  (which already verified the Google access token and domain), checks the
//  shared secret against `google_auth_shared_secret`, finds-or-creates the
//  user in handbook_users, and issues a 30-day auth token.
//
//  Secret is shared with Atelier (same Xano workspace), so both apps' server
//  routes send the same `shared_secret` value.
query "auth/google" verb=POST {
  api_group = "handbook"

  input {
    email email filters=trim|lower
    text name? filters=trim
    text shared_secret filters=trim
  }

  stack {
    util.get_env as $env_vars
    var $secret {
      value = $env_vars|get:"GOOGLE_AUTH_SHARED_SECRET"
    }

    precondition (($secret|is_empty) == false) {
      error_type = "accessdenied"
      error = "Google sign-in not configured"
    }

    // Verify the shared secret sent by the trusted server route.
    precondition ($input.shared_secret == $secret) {
      error_type = "accessdenied"
      error = "Invalid shared secret"
    }

    // Find or create the user in handbook_users.
    db.get handbook_users {
      field_name = "email"
      field_value = $input.email
    } as $user

    conditional {
      if (($user|is_empty) == true) {
        db.add handbook_users {
          data = {
            created_at: "now"
            name      : $input.name
            email     : $input.email
            role      : "member"
          }
        } as $user
      }
    }

    // Issue a 30-day auth token against handbook_users.
    security.create_auth_token {
      table = "handbook_users"
      extras = {role: $user.role}
      expiration = 2592000
      id = $user.id
    } as $authToken
  }

  response = {
    authToken: $authToken
    user     : ```
      {
        id   : $user.id
        email: $user.email
        name : $user.name
        role : $user.role
      }
      ```
  }
  guid = "ZumZ_FVkJHsO00KkoVmOrxuzUwM"
}
