import DesktopNavbar from './nav/DesktopNavbar'
import MobileBottomNav from './nav/MobileBottomNav'

export default function Navbar({ activeId }) {
  return (
    <>
      <DesktopNavbar activeId={activeId} />
      <MobileBottomNav activeId={activeId} />
    </>
  )
}
