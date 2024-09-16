import ContactUs from '@/components/ContactUs'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
// import Menu from '@/components/Menu'
import Services from '@/components/Services'
import Survey from '@/components/Survey'
import Image from 'next/image'
import MasonryGallery from './MenuGallery/menu'
import './globals.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature/>
      <Services/>
      {/* <Menu/> */}
      <MasonryGallery />
      <Survey/>
      <ContactUs/>
   
    </main>
  )
}
