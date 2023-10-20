import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {MdWorkHistory} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {FaSquarePhone} from 'react-icons/fa6'
import './index.css'

const Home = () => (
  <div id="homeSection" className="home-cont">
    <nav className="nav-bar">
      <img
        className="logo"
        src="https://t3.ftcdn.net/jpg/04/76/29/28/360_F_476292897_fs8AcgQk4VM7uZY1kdzWo7acdT7BTjoi.jpg"
        alt="logo"
      />
      <ul className="navigation-lg">
        <li className="nav-list">
          <a className="nav-anchor" href="#homeSection">
            HOME
          </a>
        </li>
        <li className="nav-list">
          <a className="nav-anchor" href="#aboutSection">
            ABOUT US
          </a>
        </li>
        <li className="nav-list">
          <a className="nav-anchor" href="#workSection">
            OUR WORK
          </a>
        </li>
        <li className="nav-list">
          <a className="nav-anchor" href="#servicesSection">
            SERVICES
          </a>
        </li>
        <li className="nav-list">
          <a className="nav-anchor" href="#contactSection">
            CONTACT US
          </a>
        </li>
      </ul>
      <ul className="navigation-sm">
        <li className="each-navi-sm">
          <a className="anchor-sm" href="#homeSection">
            <AiFillHome className="home-icons" />
          </a>
        </li>
        <li className="each-navi-sm">
          <a className="anchor-sm" href="#aboutSection">
            <BsFillInfoCircleFill className="home-icons" />
          </a>
        </li>
        <li className="each-navi-sm">
          <a className="anchor-sm" href="#workSection">
            <MdWorkHistory className="home-icons" />
          </a>
        </li>
        <li className="each-navi-sm">
          <a className="anchor-sm" href="#servicesSection">
            <GrServices className="home-icons" />
          </a>
        </li>
        <li className="each-navi-sm">
          <a className="anchor-sm" href="#contactSection">
            <FaSquarePhone className="home-icons" />
          </a>
        </li>
      </ul>
    </nav>
    <h1 className="home-heading">PATCO PRODUCTIONS</h1>
  </div>
)

export default Home
