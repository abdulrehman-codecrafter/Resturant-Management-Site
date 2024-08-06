import React, { useContext, useEffect, useState } from "react";
import foodItems from "../../../Data/Food-Items";
import ItemCard from "../../../components/Item Card";
import Header from "../../../components/Header/Header";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../../Contexts/AuthContext";

export default function Shop() {

  const {isAuth}=useContext(AuthContext)
  const manuallyAddedItems=JSON.parse(localStorage.getItem("manuallyAddedItems")) || []

  const allFoodItems=[...foodItems,...manuallyAddedItems]

  const [Items, setFoodItems] = useState(allFoodItems);
  const [filterBtns, setFilterBtns] = useState([]);
  
  useEffect(() => {
    let filterBtnsTypes = allFoodItems.map((item) => {
      return item.type;
    });
    
    setFilterBtns([...new Set(filterBtnsTypes)]);
  }, []);

  console.log(filterBtns)
  const setAllItems = () => {
    setFoodItems(allFoodItems);
  };

  const handleFilterItems = (type) => {
    const filteredItems = allFoodItems.filter((fItem) => {
      return fItem.type === type;
    });
    setFoodItems(filteredItems);
  };

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

      <div className="filter-btns gap-2 gap-md-4 mt-5 mb-4">
        <button
          className="btn"
          style={{ textTransform: "capitalize" }}
          onClick={setAllItems}
        >
          All
        </button>
        {filterBtns.map((type, i) => {
          return (
            <button
              className="btn"
              style={{ textTransform: "capitalize" }}
              key={i}
              onClick={() => handleFilterItems(type)}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="container">
        <div className="special-items-card d-flex gap-3 w-100 justify-content-center flex-wrap">
          {Items.map((item, i) => {
            return <ItemCard key={i} item={item} handleAddToCart={handleAddToCart} />;
          })}
        </div>
      </div>
    </>
  );
}
