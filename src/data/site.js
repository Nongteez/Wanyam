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
import shot1 from '../assets/m1.png'
import shot2 from '../assets/m2.png'
import shot3 from '../assets/m3.png'
import shot4 from '../assets/m4.png'
import shot5 from '../assets/m5.png'
import shot6 from '../assets/m6.png'
import shot7 from '../assets/m7.png'
import shot8 from '../assets/m8.png'

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
    title: 'Night Watch Survival',
    description:
      'Survive five nights as a hired house guard while facing increasingly dangerous supernatural threats.',
  },
  {
    title: 'Thai Folklore Spirits',
    description:
      'Encounter terrifying spirits inspired by Thai folklore, each with unique behaviors, stories, and weaknesses.',
  },
  {
    title: 'CCTV & Resource Management',
    description:
      'Monitor security cameras, manage limited resources, and make critical decisions to stay alive until dawn.',
  },
  {
    title: 'House of Secrets',
    description:
      'Explore the house, uncover its dark past, and reveal the truth hidden behind every supernatural encounter.',
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
  { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/ininstudio_' },
  { name: 'Facebook', icon: facebookIcon, url: 'https://www.facebook.com/' },
  { name: 'TikTok', icon: tiktokIcon, url: 'https://www.tiktok.com/' },
  { name: 'Discord', icon: discordIcon, url: 'https://discord.com/' },
  { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com/' },
]

export const TEAM = [
  {
    name: 'SATJAWAT WONSANTHIE',
    role: 'Chief Executive Officer',
    quote: 'Leading the vision behind WanYam and its future.',
    image: person1,
  },
  {
    name: 'PANNAWIT SONPANG',
    role: 'Designer , Art Director',
    quote: 'Crafting the visual identity and atmosphere of fear.',
    image: person2,
  },
  {
    name: 'SETTAPON CHOEDPHUTSA',
    role: 'Develper , Designer',
    quote: 'Bringing ideas to life through code and design.',
    image: person3,
  },
  {
    name: 'WASAN DONGKEND',
    role: 'Developer',
    quote: 'Engineering the systems that drive the experience.',
    image: person4,
  },
  {
    name: 'WATCHARIN PHUSOMPONG',
    role: 'Developer',
    quote: 'Building reliable solutions behind every interaction.',
    image: person5,
  },
]

export const AWARDS = [
  {
    year: '2026',
    title: 'Korat Frontier Game 2026',
    status: 'Awarded',
    description: 'Recognized among the Top 5 Playable Demo teams and awarded a 25,000 THB development grant, with participation in a 3-month incubation program to advance WanYam from prototype to production-ready demo.',
  },
  {
    year: '2026',
    title: 'Terminal 21 Games Festival 2026 ',
    status: 'Showcase',
    description: 'Featured as part of the Korat Frontier Game Incubation showcase, presenting WANYAM to players, creators, and industry professionals.',
  },
  {
    year: '2026',
    title: 'Coming Soon',
    status: 'ShowCase',
    description: 'Coming Soon 2026',
  },
]

export const STUDIO_STATS = [
  { label: 'Games in Development', value: '2+' },
  { label: 'Team Members', value: '5+' },
  { label: 'Countries Reached', value: '1+' },
]

export const ABOUT_IMAGE = heroStill
