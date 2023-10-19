import {FaSquarePhone} from 'react-icons/fa6'
import {HiMail, HiLocationMarker} from 'react-icons/hi'
import './index.css'

const ContactUs = () => {
  const colourValue = event => {
    console.log(event.target.value)
  }
  return (
    <div id="contactSection" className="contact-us-cont">
      <div className="cont-left">
        <h1 className="contact-heading">CONTACT US</h1>
        <div className="line-arrow-dot-ctc">
          <hr className="line-ctc" />
          <p className="dot-ctc"> </p>
        </div>
        <ul className="contact-lists">
          <li className="each-contact-type">
            <FaSquarePhone className="icons-style" />
            <p className="contact-des">+91 8169961396</p>
          </li>
          <li className="each-contact-type">
            <HiMail className="icons-style" />
            <p className="contact-des">patcoproductions@gmail.com</p>
          </li>
          <li className="each-contact-type">
            <HiLocationMarker className="icons-style" />
            <p className="contact-des">
              66, Harminder Singh Road, Aram Nagar Part 1, Versova,
              Mumbai-400061
            </p>
          </li>
        </ul>
      </div>
      <div className="cont-right">
        <img
          className="cont-style-img"
          alt="contact"
          src="https://res.cloudinary.com/dcbox8yto/image/upload/v1697745871/Screenshot_2023-10-20_012716_lvwvv2.png"
        />
      </div>
    </div>
  )
}

export default ContactUs
