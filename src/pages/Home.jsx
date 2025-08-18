import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import { useScrollAnimations, useOdometer } from '../hooks/useScrollAnimations'

const Home = () => {
  useScrollAnimations()
  useOdometer()

  useEffect(() => {
    // Load necessary scripts
    const scripts = [
      '/assets/js/vendor/jquery.js',
      '/assets/js/vendor/bootstrap.min.js',
      '/assets/js/plugins/swiper.js',
      '/assets/js/plugins/gsap.js',
      '/assets/js/plugins/scrolltigger.js',
      '/assets/js/plugins/smoothscroll.js',
      '/assets/js/main.js'
    ]

    scripts.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.onerror = () => console.warn(`Failed to load script: ${src}`)
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup scripts if needed
    }
  }, [])

  return (
    <div className="spybody index-11" data-spy="scroll" data-bs-target=".navbar-example2" data-offset="150">
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home