import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="tmp-footer-area footer-style-4 tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo/zachwebfull.png" alt="Reeni - Personal Portfolio HTML Template for developers and freelancers" />
                </Link>
              </div>
              <p className="description mt--30">
                © {currentYear}. All rights reserved by{' '}
                <a target="_blank" href="https://www.isaacenage.xyz" rel="noopener noreferrer">
                  Zaxus - Zac's Nexus.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer