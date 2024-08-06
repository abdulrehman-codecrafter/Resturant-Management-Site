import React, { useEffect } from "react";
import aboutImg from "../../../assets/topping.png";
import Header from "../../../components/Header/Header";
import Card from "../../../components/BannerCard";
import bannerData from "../../../Data/BannerData";
import chefImg from "../../../assets/chef.png";
import SwiperCard from "../../../components/SwiperCard";
import clients from "../../../Data/Client-Data";
import Footer from "../../../components/Footer"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="about-hero-section justify-content-center">
          <div className="about-hero-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              We Serve The Best <span>Healthy Food</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1300">
              Indulge guilt-free with our commitment to serving wholesome and
              delicious meals. Explore a menu curated to balance taste and
              nutrition, ensuring every bite is both satisfying and nourishing.
            </p>
            <div className="about-hero_btn" data-aos="fade-right" data-aos-duration="1600">
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="about-hero_img" data-aos="zoom-in" data-aos-duration="1400">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        {/* <hr /> */}
        <div className="banner-container d-flex gap-4 flex-wrap justify-content-center">
          {bannerData.map((data,i) => {
            return <Card key={i} data={data} />;
          })}
        </div>

        <div className="chef-section justify-content-center">
          <div className="chef-content" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="fw-semibold">
              Cooked By The Best Chefs In The World
            </h2>
            <p className="text-secondary">
              Experience culinary excellence crafted by master chefs from around
              the globe. Our team of culinary virtuosos brings together
              expertise, innovation, and passion to create unforgettable dining
              experiences that redefine gastronomy.
            </p>
            {/* <div className="checkox-content">

          </div> */}
          </div>
          <div className="chef-img" data-aos="fade-left"  data-aos-duration="1000">
            <img src={chefImg} alt="" />
          </div>
        </div>

        <div className="testimonial-section text-center">
          <div className="testimonial-content d-inline-block">
            <h2 className="fw-semibold">What Our Customers Are Saying</h2>
            <p className="text-secondary mt-3">
              Discover firsthand experiences and testimonials from our valued
              patrons. Explore the feedback and reviews that showcase our
              commitment to quality, service, and customer satisfaction.
            </p>
          </div>
          <div className="swiper">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation ={false}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {clients.map((client,i) => {
                return (
                  <SwiperSlide key={i}>
                    <SwiperCard data={client}/>
                  </SwiperSlide>
                );
              })}
          
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
