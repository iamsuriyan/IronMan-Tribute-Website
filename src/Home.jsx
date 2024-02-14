import More from "./components/More"
import '/src/css/home.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Home = () => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <>
    <div id="mobileMsg">
        <h2 class="btn-shine">Visit the site on a Desktop</h2>
    </div> 
    <div className="wholeWrapper">
    <section className="section-one">
        <img className='homeImage' src="ironman.jpg" alt="" />
        <div className="first" data-aos="fade-right" data-aos-duration="800">
          <h2>TONY STARK</h2>
          <h1>Iron Man</h1>
          <p>Genius. Billionaire. PlayBoy. Philanthropist.</p>
        </div>
    </section>
    <More/>
    </div>
    </>
  )
}

export default Home
