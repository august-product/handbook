import Image from "next/image";

const regions = [
  {
    title: "B A R C E L O N A",
    subtitle: "Cosmopolitan in Catalonia",
    image: "/images/region-spain-barcelona.jpg",
    paragraphs: [
      "Since King Jaume I was crowned king of Aragon in 1213, the narrow streets and striking architecture have been attracting people in droves to this present day dynamic and cosmopolitan city. Every time you come here, there will be something new to discover.",
      "Gaudi's famous Sagrada Familia church, which is being built in the style of Catalan modernism; Mercat de la Boqueria market with its colourful fruit stalls and tapas bars; Casa Batllo by Antoni Gaudi; The Museu Picasso with works by Pablo Picasso including his Guernica painting;",
      "Las Ramblas is a tree-lined street filled with shops, street artists and restaurants that stretch from the Mediterranean Sea to Placa Catalunya square; as one of the most famous tourist attractions in Barcelona, it is as you would expect very busy. Head to the Barri Gotic quarter for a more old-town experience, featuring trendy bars and late-night drinking spots and a more charming gothic feel.",
      "It is rare to have both the bustling city and the beach in one place. In the evening, enjoy people watching over a glass of sangria or local Cava while watching the tide roll in.",
      "For the sports fans, there is no more famous stadia in the world than the Camp Nou. Live the emotion of the beautiful game by entering the field of play where masters such as Messi, Ronaldinho, Diego Maradona and Ronaldo have graced.",
      "From your football boots to your dancing shoes, you may want to try your hand at Sardana. This is a traditional dance of the Catalans. You may end up with a big crowd as it is a symbol of their national pride and identity.",
    ],
  },
  {
    title: "C A N N E S",
    subtitle: "The Cote d'Azur is a lifestyle, not just a place",
    image: "/images/region-france-cannes.jpg",
    paragraphs: [
      "Cannes is more than just the film festival. It's not just about beaches and sunshine. It's not even just about chic boutiques and Michelin-starred restaurants, although they help make this city one of the most iconic destinations in Europe.",
      "This famous south of France beach city is the epitome of La Cote d'Azur as it manages to encapsulate a sophisticated yet laid-back way of life. What does this mean for you? A perfect combination of relaxed strolls along the famous La Croisette, wondrous browsing trips through the best perfumeries and boutiques, long lunches at local eateries and beach clubs. Not to mention being in and by the warmth of the Mediterranean sea.",
      "You'll be undeniably seduced by the free and easy style de vie in this area of France. From March through to October, you can expect sunshine every day with near certainty. Consequently, the atmosphere here is laid-back and the people are stress-free and happy.",
      "The food is a blend of Mediterranean influence from neighbouring countries and traditional French. It's fresh, healthy, seasonal and delicious. You'll find lots of seafood on menus, as well as charcuterie options for alfresco dining.",
      "The beaches in Cannes are some of its most popular attractions. This famous city's coastline is lined with fine sand, which attracts visitors all year round.",
      "Here you can lunch in one of the many fabulous beachside restaurants where you can enjoy fresh fish and sushi to the most delicious local Provincial rose wines or fresh juices.",
    ],
  },
  {
    title: "F R E N C H   A L P S",
    subtitle: "Look up, admire and then get your breath back",
    image: "/images/region-france-french_alps.jpg",
    paragraphs: [
      "During the summer season, the mountain becomes a paradise for anyone looking for some fresh air, awe-inspiring landscapes and fantastic activities, such as hiking (like the Tour du Mont Blanc or the Vallee Blanche), mountain biking, paragliding and alpine slides.",
      "The traditional alpine village is brimming with cosy restaurants where you can try local favourites such as charcuterie boards brimming with meat and cheese, fondue and raclette. Perfect after a day on the slopes.",
      "At the foot of the behemoth that is Mont Blanc, the aptly named Chamonix-Mont-Blanc sits just inside the junction that joins France with Switzerland and Italy. The postcard perfect panorama of this mountain range held the inaugural Winter Olympics in 1924.",
      "It was Mont Blanc and the fiercely steep and jagged Chamonix Aiguilles, which made it a hotspot for Europeans before the bars and clubs put it firmly on the party map. However, while the cluster of resorts is easily one of France's most popular skiing locations, that is not all this area's known for.",
      "Breathtaking scenery, countless historical sights and exciting year-round activities as popular draws, there's plenty of things to do in the Alpine region for all the family to enjoy. You will be surprised to know that more tourists visit the Alps in the summer than in the winter.",
    ],
  },
  {
    title: "I T A L Y",
    subtitle: "Tuscany, a picture perfect landscape to rival the Renaissance",
    image: "/images/region-italy_tuscany.jpg",
    paragraphs: [
      "The rolling hills of Tuscany are known for their lush vineyards and olive groves. The land is rich and fertile, producing some of the world's best food and wine, the Chianti in particular is best enjoyed in a quaint local taverna.",
      "This region has been called home since ancient times-the Etruscans settled here in the early Iron Age, when they were driven out by invading Romans. Nowadays, it's a popular destination for art, food, wine and nature lovers alike.",
      "If you can tear yourself away from the rolling hills, lush landscapes, vineyards and olive groves for long enough, your home is a short drive or train ride from some of the most famous artworks and monuments the world over.",
      "Pisa is famous for its leaning tower but also is the birthplace of the Italian Renaissance. Be sure to visit the Piazza dei Miracoli - the UNESCO World Heritage site for your souvenir photo.",
      "In nearby Florence you must visit the Uffizi Gallery, housing some of the most important artworks in history from Michelangelo, Caravaggio, Botticelli and Da Vinci. Perfect for aesthetes and Dan Brown fans alike.",
      "The hills, along with the beautiful scenery, make this a great place to cycle. If you prefer not to ride, there are bus tours that take visitors to towns like Volterra and Montepulciano (the birthplace of Brunello wine). Saluti.",
    ],
  },
  {
    title: "L O N D O N",
    subtitle: "Where quintessential & modern collide",
    image: "/images/region-uk-london.jpg",
    paragraphs: [
      "The parks and gardens in London are some of its most beloved attractions. From the sprawling Hyde Park to the hidden gems of Richmond Park, there's no shortage of green spaces to explore and enjoy a picnic or leisurely stroll.",
      "Here you can also enjoy a pint in one of the many charming pubs, where you can sample local ales and ciders, or indulge in a classic afternoon tea with scones and clotted cream.",
      "Whether you're a first-time visitor or a seasoned Londoner, there's always something new to discover in this diverse and dynamic city.",
      "This vibrant metropolis is the epitome of modernity and tradition as it manages to combine a rich history with contemporary culture. What does this mean for you? A perfect combination of sightseeing around iconic London landmarks, exploring eclectic markets, indulging in local traditions and international culture, with unrivalled access to lush parks throughout the city.",
      "You'll be undeniably captivated by the fast-paced yet diverse way of life in this city. From the lively atmosphere of Soho to the peaceful surroundings of Hampstead Heath, there's something for everyone.",
      "The food scene in London is a melting pot of cultures, with influences from all corners of the world. From Indian curries to Japanese sushi, there's no shortage of options to satisfy any craving. And of course, traditional English fare like fish and chips and Sunday roasts are not to be missed.",
    ],
  },
  {
    title: "M A L L O R C A",
    subtitle: "Mallorca, the Crown Jewel of the Med",
    image: "/images/region-spain-mallorca.jpg",
    paragraphs: [
      "If you are feeling adventurous, the island is a cycling paradise, a Mecca of solid rock. Whether you want to have a long slow day in the scenery or completely destroy your legs on the hills, you'll be in good company. There is a great cycling community here.",
      "Finally, the historic sites of the island are not to be missed. The 13th Century Santa Maria Cathedral in Palma to the stone built villages in Pollenca there will be something new to discover each time you come home.",
      "Mallorca is the most visited island in the Balearics. Families flock here thanks to its many beaches that cater to taking a stroll or a splash, while retirees find an abundance of wellness treatments at spas along the coast. Honeymooners enjoy exploring a range of activities including diving into the clear blue waters or hiking through mountainous trails.",
      "There are over 30 picturesque old towns on the island to explore, each with their own unique history and culture.",
      "Mallorca also has an incredibly sophisticated food scene, with restaurants serving up some of the most revered cuisine in Spain. Eating out in the area has never been more exciting. There's nothing like relaxing by the water with your feet dangling on their sandy shores while you wait for your freshly grilled tuna steak or fried calamari.",
    ],
  },
  {
    title: "P A R I S",
    subtitle: "The city of love",
    image: "/images/region-france-paris.jpg",
    paragraphs: [
      "Where to begin with Paris? The most romantic city in the world, stroll along the Seine in the lights of the Eiffel Tower, take in the Mona Lisa, Notre Dame and the Moulin Rouge. It's a good job you live here now, there is simply too much to do for a short trip.",
      "Extremely well connected throughout France, you are under an hour from the Champagne region (Reims), one of France's most famous exports, once you can tear yourself away from the diverse arrondissements of this incredible city.",
      "Food and Paris are as synonymous as bread and butter, both of which you will enjoy in abundance. French cuisine is world renowned with specialties in carbs, cheese and croissants.",
      "Crusty baguettes, slathered in salty butter can accompany any meal in our opinion. Not to forget about sweet treats, the patisseries of the City produce sweet treats that are as pleasing on the eye as on the tongue. Don't forget your macrons for back at the apartment!",
      "Once you have checked off all the major attractions, it's time to live more like a local. There are incredible things to do off the beaten track including visiting local vineyards, artworks and graffiti, smaller museums and canal strolls.",
      "Every time you visit Paris you will discover somewhere new to sit and ponder over your morning coffee and croissants...we can't wait to introduce it to you.",
    ],
  },
  {
    title: "R O M E",
    subtitle:
      "Rome wasn't built in a day, and thankfully with your new home, you will have more than a day to explore this historic city.",
    image: "/images/region-italy-rome.jpg",
    paragraphs: [
      "The monuments here are a thing of legend, immortalised in film for decades and accessible for you to explore all within a reasonable footprint.",
      "You'll feel a part of history while strolling through the cobbled streets from the Coliseum to the Pantheon, stopping for a pizza and a spritz in between. From fountains to squares and steps there is history on every corner. Drop your coin in the Trevi Fountain before traversing the Spanish Steps.",
      "Admire columns and architecture that boggles the mind of how they were able to create such masterpieces. Speaking of masterpieces, there is another country accessible from here, but you don't need your passport.",
      "Be transported to the Vatican and experience the Sistine Chapel. Marvel at the Basilica and maybe even catch a glimpse of the Pontiff.",
      "There are over 900 churches in Rome, so be sure to sustain yourself with the incredible food and drink on offer while trying to tick as many of these off the list. The cacio e pepe is a local speciality, as is of course gelato.",
    ],
  },
  {
    title: "S O U T H   O F   F R A N C E",
    subtitle: "The Cote d'Azur is a lifestyle, not just a place",
    image: "/images/region-france-south_of_france.png",
    paragraphs: [
      "The South of France is not just about wine and olive oil. It's not just about beaches and sunshine. It's not even just about chic boutiques and Michelin-starred restaurants, although those things do of course make the region one of most popular in Europe.",
      "The Cote d'Azur manages to encapsulate a sophisticated yet laid-back way of life. What does this mean for you? A perfect combination of relaxed strolls around historic villages and cities, to the hustle and bustle of Cannes and the Cote d'Azur.",
      "You'll be undeniably seduced by the free and easy style de vie in this area of France. From March through to October, you can expect sunshine every day with near certainty. Consequently, the atmosphere here is laid-back and the people are stress-free and happy.",
      "The food in the region is a blend of Mediterranean influence from neighbouring countries and Traditional French. It's fresh, healthy, seasonal and delicious. You'll find lots of fish and seafood on menus, as well as vegetables and fresh fruit.",
      "The beaches of the South of France are some of its most popular attractions. The region's coastline is lined with fine sand, which gives way to pine forests that run along the beach in either direction. For this reason, the typical French beach is sparsely populated and rarely crowded, unless of course you are in Cannes in the height of summer.",
      "Here you can lunch in one of the many fabulous beachside restaurants. Enjoy fresh fish and sushi to the most delicious local rose wines or fresh juices.",
    ],
  },
  {
    title: "T H E   C O T S W O L D S",
    subtitle: "Quintessential British Countryside, an AONB to live out your Holiday dreams",
    image: "/images/region-uk-cotswolds.png",
    paragraphs: [
      "If the 100 mile hike is too much exertion for you, time seems to stand still and make way for a very relaxed pace of life in the Countryside. It is worth remembering you are within proximity and only a short train ride away from major cities such as London and Oxford.",
      "The Cotswolds is home to many famous faces including quintessential English Gent Hugh Grant, who you may catch on the golf course. Honorary royalty and actual royalty in the form of The Beckhams and Princess Beatrice are also residents in the area.",
      "When you arrive home, you may feel like a celebrity yourself, as you approach your traditional stone cottage, you could be Cameron Diaz and Jude law in The Holiday.",
      "Lively market towns, quaint hamlets and rolling hills (or 'wolds') define this Country bolt hole, a short trip out of London for those fortunate enough to live here.",
      "Marvel at magnificent manors, peek inside palaces and stroll along the streams you will find criss crossing through the unspoilt scenery.",
      "Perfect for walking, cycling, horse riding or driving with the top down, you can only be charmed and in awe around every turn.",
      "If you feel like strapping on the hiking boots, the Cotswolds way is over 100 miles long. Never fear there are plenty of cosy pubs with open fire places and refreshing local ales, wines, meats and cheeses to lighten the load.",
    ],
  },
];

export default function RegionsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-semibold text-slate-800">Our Regions</h1>
      <div className="space-y-12">
        {regions.map((region, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={region.title}
              className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className={isEven ? "order-1" : "order-2"}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                  {region.title}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-800">{region.subtitle}</h2>
                <div className="mt-4 space-y-4 text-sm text-slate-600">
                  {region.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className={isEven ? "order-2" : "order-1"}>
                <div className="overflow-hidden rounded-3xl border border-[#d8d0c8] bg-[#e7e1db]">
                  <Image
                    src={region.image}
                    alt={region.subtitle}
                    width={560}
                    height={420}
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
