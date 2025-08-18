import { useEffect } from 'react'

export const useScrollAnimations = () => {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all elements with animation triggers
    const animatedElements = document.querySelectorAll('.tmp-scroll-trigger')
    animatedElements.forEach((el) => observer.observe(el))

    // Cleanup
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

export const useParticles = () => {
  useEffect(() => {
    const loadParticles = async () => {
      // Load particles.js if not already loaded
      if (!window.particlesJS) {
        const script = document.createElement('script')
        script.src = '/assets/js/vendor/particle.js'
        script.onload = () => {
          // Particles config is already handled in Banner component
        }
        document.head.appendChild(script)
      }
    }

    loadParticles()
  }, [])
}

export const useOdometer = () => {
  useEffect(() => {
    const loadOdometer = async () => {
      if (!window.Odometer) {
        const script = document.createElement('script')
        script.src = '/assets/js/plugins/odometer.js'
        script.onload = () => {
          // Initialize odometer for counter elements
          const odometerElements = document.querySelectorAll('.odometer')
          odometerElements.forEach((el) => {
            const count = el.getAttribute('data-count')
            if (count) {
              setTimeout(() => {
                el.innerHTML = count
              }, 1000)
            }
          })
        }
        document.head.appendChild(script)
      }
    }

    loadOdometer()
  }, [])
}