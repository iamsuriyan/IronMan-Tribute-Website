import { useNavigate } from 'react-router-dom'
import '../css/about.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const About = () => {
  useEffect(()=>{
    Aos.init()
  })
  const navigate=useNavigate();
  return (
    <>
      <div className="about-main" >
        <div className="leftAbout">
          <img className='about-image' src="tony04.png" alt="" />
        </div>
        <div className="rightAbout">
          <p data-aos="fade-left" data-aos-duration="1000">Stark becomes a founding member and eventual leader of the <span>Avengers.</span> Following his failer <span>Ultron Program,</span> the internal conflict within the Avengers due to the Sokovia Accords, and <span>Thanos</span> successfully erasing half of all life in the Blip, Stark retires, marries <span>Pepper Potts,</span> and they have a daughter named Morgan. However, Stark rejoins the Avengers on a final mission to undo Thanos' actions. He enginners a time travel device and the Avengers successfully restore trillions of lives across the <span>universe</span> before Stark ultimately sacrifice his life to defeat Thanos and his army.</p>

          <p data-aos="fade-left" data-aos-duration="1000">Stark appeared in eleven films as of 2023. The charactor and Downey's performance have been credited with helping to cement the MCU as a <span>multi-billion-dollar</span> franchise, with Stark's <span>evolution</span> often being considered the defining arc of the series</p>
          <div className='button-goback'>
            <button onClick={()=>navigate(-1)} data-aos="flip-up" data-aos-duration="1000">Go Back</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
