import React from 'react';

const Footer = () => {
  return (
    
    <footer className="footer mt-5 pt-4" id="contact">
      <div className="section__container container footer__container">
       <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="footer__col text-center">
          <div className="logo footer__logo">
            <a href="#">Food<span>man</span></a>
          </div>
          <p className="section__description">
            Embark on a gastronomic journey with FoodMan, where every bite tells
            a story and every dish is crafted to perfection.
          </p>
        </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="footer__col text-center">
          <h4>Product</h4>
          <ul className="footer__links">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Meal Deals</a></li>
            <li><a href="#">Catering Options</a></li>
            <li><a href="#">Seasonal Offerings</a></li>
          </ul>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="footer__col text-center">
          <h4>Information</h4>
          <ul className="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Nutrition Information</a></li>
            <li><a href="#">Allergen Information</a></li>
          </ul>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="footer__col text-center">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
        </div>
       </div>
        
        
        
        
      <div className="footer__bar">
        Copyright © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

