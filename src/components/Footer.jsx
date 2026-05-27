import { motion } from 'framer-motion'
import wanyamLogo from '../assets/Logo/WANYAM-LOGO-GAME.png'
import ininLogo from '../assets/Logo/YOLO-TEAM.png'
import instagramIcon from '../assets/Contact/Logo_Instragram.png'
import facebookIcon from '../assets/Contact/Logo_Facebook.png'
import tiktokIcon from '../assets/Contact/Logo_Tiktok.png'
import discordIcon from '../assets/Contact/Logo_Discord.png'
import youtubeIcon from '../assets/Contact/Logo_Youtube.png'

const socialLinks = [
  { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/' },
  { name: 'Facebook', icon: facebookIcon, url: 'https://www.facebook.com/' },
  { name: 'TikTok', icon: tiktokIcon, url: 'https://www.tiktok.com/' },
  { name: 'Discord', icon: discordIcon, url: 'https://discord.com/' },
  { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com/' },
]

const footerLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Distribute', id: 'distribute' },
  { label: 'Contact', id: 'contact' },
  { label: 'Team', id: 'team' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-[rgba(139,0,0,0.1)] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={wanyamLogo}
                alt="WANYAM"
                className="h-10 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="font-['Outfit'] font-bold text-base tracking-[4px] text-white uppercase">
                  WANYAM
                </span>
                <span className="font-['Outfit'] text-xs tracking-[2px] text-[#dc143c]">
                  วันยาม
                </span>
              </div>
            </div>
            <p className="text-[#555] text-xs leading-relaxed mb-4 max-w-xs">
              A Thai psychological horror experience by ININ Studio. 
              Face the darkness within.
            </p>
            <div className="flex items-center gap-2">
              <img
                src={ininLogo}
                alt="ININ Studio"
                className="w-6 h-6 object-contain"
              />
              <span className="text-[#666] text-[10px] tracking-[2px] uppercase font-['Inter']">
                ININ Studio
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-xs tracking-[3px] uppercase text-[#888] mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left bg-transparent border-none text-[#555] hover:text-[#dc143c] text-xs tracking-[1px] font-['Inter'] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-xs tracking-[3px] uppercase text-[#888] mb-6">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(139,0,0,0.1)] flex items-center justify-center transition-all duration-300 hover:border-[rgba(220,20,60,0.3)] hover:bg-[rgba(139,0,0,0.1)]"
                >
                  <img src={social.icon} alt={social.name} className="w-4 h-4 object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-[rgba(255,255,255,0.03)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-[10px] tracking-[2px] uppercase font-['Inter']">
            © {new Date().getFullYear()} ININ Studio. All rights reserved.
          </p>
          <p className="text-[#333] text-[10px] tracking-[2px] uppercase font-['Inter']">
            WANYAM — วันยาม
          </p>
        </div>
      </div>
    </footer>
  )
}
