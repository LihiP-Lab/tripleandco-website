import {
  Target,
  PenLine,
  ClipboardList,
  Palette,
  Ruler,
  Image as ImageIcon,
  BarChart3,
  Map as MapIcon,
  Smartphone,
  CalendarDays,
  Megaphone,
  Search,
  Lightbulb,
  TrendingUp,
  DollarSign,
  BookOpen,
  Recycle,
  Clapperboard,
  FileText,
  Scissors,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the emoji stored in agents-data to a Lucide line icon, so the
 * console cards render premium iconography instead of OS emoji.
 */
const EMOJI_TO_ICON: Record<string, LucideIcon> = {
  "\uD83C\uDFAF": Target, // 🎯
  "\u270D\uFE0F": PenLine, // ✍️
  "\u270D": PenLine,
  "\uD83D\uDCCB": ClipboardList, // 📋
  "\uD83C\uDFA8": Palette, // 🎨
  "\uD83D\uDCD0": Ruler, // 📐
  "\uD83D\uDDBC\uFE0F": ImageIcon, // 🖼️
  "\uD83D\uDDBC": ImageIcon,
  "\uD83D\uDCCA": BarChart3, // 📊
  "\uD83D\uDDFA\uFE0F": MapIcon, // 🗺️
  "\uD83D\uDDFA": MapIcon,
  "\uD83D\uDCF1": Smartphone, // 📱
  "\uD83D\uDCC5": CalendarDays, // 📅
  "\uD83D\uDDE3\uFE0F": Megaphone, // 🗣️
  "\uD83D\uDDE3": Megaphone,
  "\uD83D\uDD0D": Search, // 🔍
  "\uD83D\uDCA1": Lightbulb, // 💡
  "\uD83D\uDCC8": TrendingUp, // 📈
  "\uD83D\uDCB0": DollarSign, // 💰
  "\uD83D\uDCDA": BookOpen, // 📚
  "\u267B\uFE0F": Recycle, // ♻️
  "\u267B": Recycle,
  "\uD83C\uDFAC": Clapperboard, // 🎬
  "\uD83D\uDCDD": FileText, // 📝
  "\u2702\uFE0F": Scissors, // ✂️
  "\u2702": Scissors,
};

export function DeliverableIcon({
  emoji,
  className,
}: {
  emoji: string;
  className?: string;
}) {
  const Icon = EMOJI_TO_ICON[emoji] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
