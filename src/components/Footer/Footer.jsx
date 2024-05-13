import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
      <div className="footer">
          <div className="f-socials">
              <li><FontAwesomeIcon icon={faFacebook} size="xl"/></li>
              <li><FontAwesomeIcon icon={faTwitter} size="xl"/></li>
              <li><FontAwesomeIcon icon={faInstagram} size="xl"/></li>
              <li><FontAwesomeIcon icon={faLinkedin} size="xl"/></li>
          </div>
              <p className="author">LEO CLUB BIT MESRA</p>
              <p className="copyright">©2024</p>
      </div>
      </footer>
    </>
  );
}

export default Footer;