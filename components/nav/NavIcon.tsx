import {
  Palette,
  Layers,
  TrendingUp,
  House,
  ListChecks,
  Calendar,
  Heart,
  Scale,
  Rocket,
  MapPin,
  Link as LinkIcon,
  Folder,
  Users,
  BookOpen,
  Star,
  Sparkles,
  Eye,
  Bot,
  KeyRound,
  AppWindow,
  Laptop,
  Shield,
  Briefcase,
  Search,
  Headphones,
  FileCheck,
  Building,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  palette: Palette,
  layers: Layers,
  "trending-up": TrendingUp,
  house: House,
  "list-checks": ListChecks,
  calendar: Calendar,
  heart: Heart,
  scale: Scale,
  rocket: Rocket,
  "map-pin": MapPin,
  link: LinkIcon,
  folder: Folder,
  users: Users,
  "book-open": BookOpen,
  star: Star,
  sparkles: Sparkles,
  eye: Eye,
  bot: Bot,
  "key-round": KeyRound,
  "app-window": AppWindow,
  laptop: Laptop,
  shield: Shield,
  briefcase: Briefcase,
  search: Search,
  headphones: Headphones,
  "file-check": FileCheck,
  building: Building,
};

export default function NavIcon({
  name,
  size = 20,
  className = "",
}: {
  name?: string;
  size?: number;
  className?: string;
}) {
  if (!name || !iconMap[name]) return null;
  const Icon = iconMap[name];
  return <Icon size={size} className={className} />;
}
