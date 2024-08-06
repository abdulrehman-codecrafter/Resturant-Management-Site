import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BannerCard({data}) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="banner-card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="banner-icon">
          {data.icon}
        </div>
        <h4>{data.title}</h4>
        <p className="text-secondary">{data.description}</p>
        <Link className="text-decoration-none" style={{color:"#fc7f09"}}>
            Explore More &nbsp; <FaArrowRight />
        </Link>
    </div>
);
}
