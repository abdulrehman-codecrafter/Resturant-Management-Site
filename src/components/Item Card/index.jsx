import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster, toast } from "sonner";

export default function ItemCard({ item,handleAddToCart }) {
 

  // const handleAddToCart = () => {
  //   let { name, description, id, img_src, type, price } = item;
  //   console.log(orderItems);
  
  //   const newItem = {
  //     name,
  //     description,
  //     id,
  //     img_src,
  //     type,
  //     price,
  //     user_id: loggedUser.user_id
  //   };
  //   console.log(newItem);
  
  //   const updatedOrderItems = [...orderItems, newItem]; // Create a new array
  
  //   localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
  //   toast.success("Item Added to Cart");
  // };
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="item-card  px-4 py-4"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <img src={item.img_src} alt="" className="mb-3" />
        <h4 className="text-center" style={{ textTransform: "capitalize" }}>
          {item.name}
        </h4>
        <p className="">{item.description}</p>

        <div className="item-footer">
          <p className="price text-success">$ {item.price}</p>
          <button className="btn text-white" onClick={()=>{handleAddToCart(item)}}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
