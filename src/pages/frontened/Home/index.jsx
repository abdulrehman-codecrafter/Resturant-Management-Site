import React, { useEffect,useContext } from "react";
import Header from "../../../components/Header/Header";
import heroImg from "../../../assets/header.png";
import ItemCard from "../../../components/Item Card";
import foodItems from "../../../Data/Food-Items";
import Footer from "../../../components/Footer";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../../Contexts/AuthContext";


import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const {isAuth}=useContext(AuthContext)

  const specialItems = foodItems.filter((item) => {
    return item.type === "special";
  });
  useEffect(() => {
    Aos.init();
  }, []);


  let orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];
  
  const handleAddToCart = (item) => {
    if (!isAuth) {
      return toast.error("Login First to Place Order");
    }
  
    const { name, description, id, img_src, type, price } = item;
    
    // Find if the item is already in the cart for the logged-in user
    const alreadyAddedItem = orderItems.find(
      (i) => i.id === id && i.user_id === loggedUser.user_id
    );
  
    if (alreadyAddedItem) {
      return toast.error("Already Added to Cart");
    }
  
    const newItem = {
      name,
      description,
      id,
      img_src,
      type,
      price,
      user_id: loggedUser.user_id,
      quantity: 1,
    };
  
    orderItems.push(newItem);
  
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
    toast.success("Item Added to Cart");
  };
  
  return (
    <>
      <Toaster position="top-right" richColors />

      <Header />
      <div className="container mt-5">
        <div className="hero-section justify-content-center">
          <div className="hero-content ">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Meet, Eat & Enjoy The <br /> <span>True Taste</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1300">
              Discover the true essence of culinary delight as you meet, eat,{" "}
              <br />
              savor the authentic flavors that define our passion for food.
            </p>
            <div
              className="hero_btn"
              data-aos="fade-right"
              data-aos-duration="1600"
            >
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="hero_img" data-aos="zoom-in" data-aos-duration="1400">
            <img src={heroImg} alt="" />
          </div>
        </div>

        <div className="special-container">
          <h2
            className="text-center mt-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Our Special Dishes
          </h2>
          <p
            className="text-center mt-3 mb-4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            Each dish promises an unforgettable dining experience, blending
            innovation with tradition to delight your senses.
          </p>
          <div className="special-items-card d-flex gap-3 w-100 justify-content-center flex-wrap">
            {specialItems.map((item, i) => {
              return <ItemCard key={i} item={item} handleAddToCart={handleAddToCart} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
