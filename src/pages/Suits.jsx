import {Swiper,SwiperSlide} from "swiper/react"
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import '../css/suits.css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {EffectCoverflow,Navigation} from 'swiper/modules'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Suits = () => {
    useEffect(()=>{
        Aos.init()
      })
    const navigate=useNavigate();
  return (
    <>
    <audio className="audiotony" src="welcome_home_jarvis.mp3" controls autoPlay></audio>
      <div className="container">
        <h1 className="heading" data-aos="fade-down">My favourite Suits</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
            }}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable:true,
            }}
            modules={[EffectCoverflow,Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
                <img src="mark-lxxxv.webp" alt="" />
                <figcaption>Mark 85<br />NanoTech Armor</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xliii.webp" alt="" />
                <figcaption>Mark 43</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xliv.webp" alt="" />
                <figcaption>Mark 44<br />HulkBuster</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xx.webp" alt="" />
                <figcaption>Mark 20<br />Python</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xv.webp" alt="" />
                <figcaption>Mark 15<br />Sneaky</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xxxvii.webp" alt="" />
                <figcaption>Mark 38<br />Igor</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark-xxiv.webp" alt="" />
                <figcaption>Mark 24<br />Tank</figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="mark06.webp" alt="" />
                <figcaption>Mark 6<br /></figcaption>
            </SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        <div className="goback008">
            <button onClick={()=>navigate(-1)} className="backward">Go back</button>
        </div>
      </div>
    </>
  )
}

export default Suits
