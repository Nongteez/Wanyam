import heroStill from '../assets/Hero_FIX2.png'
import person1 from '../assets/Person/Person1.jpg'
import person2 from '../assets/Person/Person2.jpg'
import person3 from '../assets/Person/Person3.jpg'
import person4 from '../assets/Person/Person4.jpg'
import person5 from '../assets/Person/Person5.jpg'
import instagramIcon from '../assets/Contact/Logo_Instragram.png'
import facebookIcon from '../assets/Contact/Logo_Facebook.png'
import tiktokIcon from '../assets/Contact/Logo_Tiktok.png'
import discordIcon from '../assets/Contact/Logo_Discord.png'
import youtubeIcon from '../assets/Contact/Logo_Youtube.png'
import steamIcon from '../assets/Contact/Steam.png'
import epicIcon from '../assets/Contact/EPIGAME.png'
import shot1 from '../assets/m1.jpg'
import shot2 from '../assets/m2.jpg'
import shot3 from '../assets/m3.jpg'
import shot4 from '../assets/m4.jpg'
import shot5 from '../assets/m5.jpg'
import shot6 from '../assets/m6.jpg'
import shot7 from '../assets/m7.jpg'
import shot8 from '../assets/m8.jpg'

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Media' },
  { id: 'distribute', label: 'Distribute' },
  { id: 'contact', label: 'Contact' },
  { id: 'team', label: 'Team' },
]

export const FEATURES = [
  {
    title: 'Psychological Horror',
    description: 'Fear that builds through tension, isolation, and the unknown.',
  },
  {
    title: 'Thai Paranormal Folklore',
    description: 'Authentic legends woven into a grounded supernatural narrative.',
  },
  {
    title: 'Immersive Atmosphere',
    description: 'Sound, light, and space designed to pull you into the house.',
  },
  {
    title: 'Story-Driven Gameplay',
    description: 'Every patrol and recording reveals another piece of the truth.',
  },
]

export const SCREENSHOTS = [
  { src: shot7, alt: 'WANYAM screenshot 1' },
  { src: shot2, alt: 'WANYAM screenshot 2' },
  { src: shot3, alt: 'WANYAM screenshot 3' },
  { src: shot8, alt: 'WANYAM screenshot 4' },
  { src: shot1, alt: 'WANYAM screenshot 5' },
  { src: shot4, alt: 'WANYAM screenshot 6' },
  { src: shot5, alt: 'WANYAM screenshot 7' },
  { src: shot6, alt: 'WANYAM screenshot 8' },
]

export const PLATFORMS = [
  {
    name: 'Steam',
    description: 'Wishlist and follow development on Steam.',
    url: 'https://store.steampowered.com/',
    icon: steamIcon,
  },
  {
    name: 'Epic Games',
    description: 'Coming soon to the Epic Games Store.',
    url: 'https://store.epicgames.com/',
    icon: epicIcon,
  },
]

export const SOCIALS = [
  { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/' },
  { name: 'Facebook', icon: facebookIcon, url: 'https://www.facebook.com/' },
  { name: 'TikTok', icon: tiktokIcon, url: 'https://www.tiktok.com/' },
  { name: 'Discord', icon: discordIcon, url: 'https://discord.com/' },
  { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com/' },
]

export const TEAM = [
  {
    name: 'SATJAWAT WONSANTHIE',
    role: 'Chief Executive Officer',
    quote: 'Building the future of interactive storytelling.',
    image: person1,
  },
  {
    name: 'APISIT KHAMPHONG',
    role: 'Creative Director',
    quote: 'Crafting immersive horror from Thai folklore.',
    image: person2,
  },
  {
    name: 'THANAPORN SIRILAK',
    role: 'Lead Developer',
    quote: 'Engineering the systems behind the fear.',
    image: person3,
  },
  {
    name: 'NATTAWUT PRASERTSRI',
    role: 'Art Director',
    quote: 'Designing the visual language of dread.',
    image: person4,
  },
  {
    name: 'KAMONPAT THONGBAI',
    role: 'Sound Designer',
    quote: 'Shaping silence, creaks, and whispers.',
    image: person5,
  },
]

export const AWARDS = [
  {
    year: '2024',
    title: 'Indie Game Development Grant',
    status: 'Awarded',
    description: 'Funding support for innovative indie horror development in Thailand.',
  },
  {
    year: '2025',
    title: 'Thailand Digital Innovation Support',
    status: 'Selected',
    description: 'National program backing Thai creative technology studios.',
  },
  {
    year: '2025',
    title: 'Horror Game Showcase Selection',
    status: 'Featured',
    description: 'Highlighted among upcoming psychological horror titles.',
  },
]

export const STUDIO_STATS = [
  { label: 'Games in Development', value: '2+' },
  { label: 'Team Members', value: '10+' },
  { label: 'Countries Reached', value: '15+' },
]

export const ABOUT_IMAGE = heroStill
