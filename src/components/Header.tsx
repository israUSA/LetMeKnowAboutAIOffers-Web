import { GraduationCap, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060610]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-2">
        <a href="/" className="flex min-w-0 items-center gap-2.5 group">
          <div className="relative w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/25 transition-transform duration-300 group-hover:scale-105">
            <GraduationCap size={20} className="text-white" />
            <Sparkles size={10} className="absolute top-1 right-1 text-white" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </div>
          <span className="truncate font-display text-base sm:text-lg font-bold tracking-tight">
            <span className="text-gradient">LetMeKnow</span>
            <span className="text-white">AboutStudentOffers</span>
          </span>
        </a>
      </div>
    </header>
  )
}
