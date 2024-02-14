import { useNavigate } from "react-router-dom"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const More = () => {
  useEffect(()=>{
    Aos.init()
  })
  const navigate=useNavigate()
  return (
    <>
      <section className="section-two">
        <img className="moreImage" src="ironman03.jpg" alt=""/>
        <div className="second" data-aos="fade-up-right">
            <p>Inventor <span className="name">Tony stark</span> applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.</p>
            <div className="flexbox">
                <button onClick={()=>navigate('/about')} className="moreAbout" data-aos="flip-up" data-aos-duration="1000">About</button>
                <button onClick={()=>navigate('/biography')} className="moreAbout" data-aos="flip-up" data-aos-duration="1000">Biography</button>
                <button onClick={()=>navigate('/suits')} className="moreAbout" data-aos="flip-up" data-aos-duration="1000">Suits</button>
                <button onClick={()=>navigate('/sacrifice')} className="moreAbout" data-aos="flip-up" data-aos-duration="1000">Sacrifice</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default More
