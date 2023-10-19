import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import './index.css'

const Clients = () => {
  console.log('clients')

  return (
    <div id="clientSection" className="clients-cont">
      <h1 className="clients-heading">CLIENTS</h1>
      <div className="line-arrow-dot-cl">
        <hr className="line-cl" />
        <p className="dot-cl"> </p>
      </div>

      <div className="arrows-clients">
        <FaLessThan className="left-arrow" />
        <img
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697741863/U2NyZWVuc2hvdF8yMDIzLTEwLTIwXzAwMjcyNl94cXV2eHI=/grid_landscape"
          className="clients-img"
          alt="clients"
        />
        <FaGreaterThan className="right-arrow" />
      </div>
    </div>
  )
}

export default Clients
