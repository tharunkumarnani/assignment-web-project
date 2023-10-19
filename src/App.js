import {Component} from 'react'

import Home from './components/Home'
import About from './components/About'
import Process from './components/Process'
import OurWork from './components/OurWork'
import OurServices from './components/OurServices'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    return (
      <div className="container">
        <Home />
        <About />
        <Process />
        <OurWork />
        <OurServices />
        <Clients />
        <Testimonials />
        <ContactUs />
      </div>
    )
  }
}

export default App
