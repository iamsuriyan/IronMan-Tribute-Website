import ArcReactor from "../components/ArcReactor"
import { useNavigate } from 'react-router-dom'
import '../css/sacrifice.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Sacrifice = () => {
  useEffect(()=>{
    Aos.init()
  })
  const navigate=useNavigate();
  return (
    <>
    <ArcReactor/>
      <div className="mainSacrifice">
        <div className="left-sac">
            <img className="tonySnap" src="hero4.jpg" alt=""/>
        </div>
        <div className="right-sac">
            <div className="wrapperdiv2">
            <div className="arcReactor">
                <p  data-aos="fade-left" data-aos-duration="1000">Tony Stark's greatest sacrifice was undoubtedly when he sacrifice his life to save the universe by wielding the Infinity Stones in "Avengers: Endgame." It was a poignant moment that showcased his selflessness and heroism</p>
            </div>
            <div className="contentArc">
                <p data-aos="fade-left" data-aos-duration="1000">Proof that <span className="glowText">IRONMAN</span> has a Heart</p>
                <p data-aos="fade-left" data-aos-duration="1000">We love you 3000.</p>
            </div>
            <div className="buttonLast">
                <button data-aos="flip-up" data-aos-duration="1000" onClick={()=>navigate(-1)} className="goback007">Go back</button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Sacrifice
