import './index.css'

const OurWork = () => (
  <div id="workSection" className="our-work-cont">
    <h1 className="our-work-heading">OUR WORK</h1>
    <div className="line-arrow-dot-work">
      <hr className="line-work" />
      <p className="dot-work"> </p>
    </div>
    <ul className="work-images">
      <li className="each-image">
        <img
          src="https://res.cloudinary.com/dcbox8yto/image/upload/v1697737564/Screenshot_2023-10-19_231233_evgbrq.png"
          alt="our work"
          className="work-img"
        />
      </li>
      <li className="each-image-double">
        <img
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737564/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTI1M19mNHNqNGw=/grid_landscape"
          alt="our work"
          className="work-img-1"
        />
        <img
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737564/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTMwNF9oeHJxejY=/grid_landscape"
          alt="our work"
          className="work-img-2"
        />
      </li>
      <li className="each-image">
        <img
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737565/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTMyMV9nYzhveGo=/grid_landscape"
          alt="our work"
          className="work-img"
        />
      </li>
      <li className="each-image">
        <img
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737565/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTMzMl9vOHV2czY=/grid_landscape"
          alt="our work"
          className="work-img"
        />
      </li>
      <li className="bottom-landscape-imgs">
        <img
          className="landscape-img"
          alt="our work"
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737565/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTM1Ml9uNXpnMHU=/grid_landscape"
        />
      </li>
      <li className="bottom-landscape-imgs">
        <img
          className="landscape-img"
          alt="our work"
          src="https://res-console.cloudinary.com/dcbox8yto/thumbnails/v1/image/upload/v1697737564/U2NyZWVuc2hvdF8yMDIzLTEwLTE5XzIzMTM0M19seG9uZ3M=/grid_landscape"
        />
      </li>
    </ul>
  </div>
)

export default OurWork
