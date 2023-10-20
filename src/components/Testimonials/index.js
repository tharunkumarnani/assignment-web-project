import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import './index.css'

const Testimonials = () => (
  <div id="testimonialsSection" className="testimonials-cont">
    <div className="right-left">
      <div className="test-left-part">
        <div className="left-part-cont">
          <img
            className="left-part-img"
            alt="testimonials"
            src="https://education.sakshi.com/sites/default/files/images/2023/07/10/jobs-guidance-1688993242.jpg"
          />
          <p className="left-des">
            Video lectures form the crux of IIDE’s student & corporate training
            curriculums. So creating content matching global education standards
            is paramount. TRC promptly adapted to brand guidelines & delivered
            quality animation that brought our experts explanation to life.
          </p>
          <h1 className="left-heading">Bhumit Gor</h1>
          <p className="left-role">Co-Founder & Guitarist, Last Minute Band</p>
        </div>
      </div>
      <div className="test-right-part">
        <h1 className="test-right-top-heading">testimonials</h1>
        <div className="line-arrow-dot2-tst">
          <p className="dot2-tst"> </p>
          <hr className="line2-tst" />
        </div>
        <h1 className="right-heading">What they say about our passion?</h1>
        <div className="arrows-cont">
          <p className="arrow-background">
            <FaArrowLeft className="arrows-style" />
          </p>
          <p className="arrow-background">
            <FaArrowRight className="arrows-style" />
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials
