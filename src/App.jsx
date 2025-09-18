import { useState } from 'react'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'
import ScheduleSection from './ScheduleSection.jsx'
import HashtagPerformance from './HashtagPerformance.jsx'
import TestimonialSection from './TestimonialSection.jsx'
import CtaSection from './CtaSection.jsx'
import Footer from './Footer.jsx'


function App() {

  return (
   <>
   <Header />
    <HeroSection />
    <ScheduleSection />
    <HashtagPerformance />
    <TestimonialSection />
    <CtaSection />
    <Footer />
   </>
  )
}

export default App
