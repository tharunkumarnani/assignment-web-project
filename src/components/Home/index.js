import './index.css'

const Home = () => {
  console.log('home')
  return (
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
      </nav>
      <h1 className="home-heading">PATCO PRODUCTIONS</h1>
    </div>
  )
}

export default Home
