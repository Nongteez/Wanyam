import {
  BookMarked,
  Clapperboard,
  Gamepad2,
  Home,
  MessageCircle,
  Users,
} from 'lucide-react'
import { scrollToSection } from './scrollToSection'

const MOBILE_NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: BookMarked },
  { id: 'gallery', label: 'Media', Icon: Clapperboard },
  { id: 'distribute', label: 'Store', Icon: Gamepad2 },
  { id: 'contact', label: 'Contact', Icon: MessageCircle },
  { id: 'team', label: 'Team', Icon: Users },
]

const ICON_SIZE = 22

function NavIcon({ Icon, isActive }) {
  return (
    <Icon
      size={ICON_SIZE}
      strokeWidth={isActive ? 2 : 1.75}
      fill={isActive ? 'currentColor' : 'none'}
      className="shrink-0 transition-all duration-300"
      aria-hidden="true"
    />
  )
}

export default function MobileBottomNav({ activeId }) {
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed inset-x-0 bottom-0 z-[9999] lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-6 h-8 bg-[radial-gradient(ellipse_at_center,rgba(120,0,0,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 border-t border-[rgba(180,0,0,0.22)] bg-[rgba(6,6,6,0.94)] shadow-[0_-8px_28px_rgba(90,0,0,0.18)] backdrop-blur-[20px]" />
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(180,0,0,0.35)] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-[62px] max-w-lg items-center justify-between gap-1 px-2">
        {MOBILE_NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activeId === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className="group flex min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 border-0 bg-transparent px-0.5 transition-all duration-300 active:scale-[0.97]"
            >
              <span
                className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${
                  isActive
                    ? 'scale-105 text-[#b30000]'
                    : 'scale-100 text-[#5c5a5a] group-hover:text-[#8a8585]'
                }`}
                style={
                  isActive
                    ? { filter: 'drop-shadow(0 0 8px rgba(179,0,0,0.45))' }
                    : undefined
                }
              >
                <NavIcon Icon={Icon} isActive={isActive} />
                <span
                  className={`font-['Inter'] text-[10px] font-medium uppercase leading-none tracking-[0.05em] transition-colors duration-300 ${
                    isActive ? 'text-[#b30000]' : 'text-[#5c5a5a]'
                  }`}
                >
                  {label}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
