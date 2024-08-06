import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";


export default function SwiperCard({data}) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="swiper-card-container d-flex justify-content-center mt-4" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className='swiper-card'>
        <p className='text-secondary'>{data.description}</p>
        <img src={data.img_src} alt="" />
        <h5 className='mt-2'>{data.name}</h5>
        <p className=''>{data.job}</p>
      </div>
    </div>
  )
}
