import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Descriptions, Input } from "antd";
import { Toaster, toast } from "sonner";
import food from "../../../assets/food.png"
import Header from "../../../components/Header/Header";


const initialState = { name: "", description: "", price: "", type: "" };
export default function Add() {
  const manuallyAddedItems =
    JSON.parse(localStorage.getItem("manuallyAddedItems")) || [];
  const [state, setState] = useState(initialState);
  const handleChange = (e) =>
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));

  console.log(state);

  const handleAddItem = (e) => {
    e.preventDefault();

    let { name, description, price, type } = state;
    price = Number(price);
    type=type.toLowerCase();
    name=name.toLowerCase()

    if ((!name|| !description || !price ||  !type)) {
      return toast.error("Fill All Credentials");
    }
    if (!price) {
      return toast.error("Invalid Price");
    }

    let alreadyAddedItem = manuallyAddedItems.find((item) => {
      return item.name === name;
    });
    if (alreadyAddedItem) {
      return toast.error("Item Already Added");
    }

    let item = {
      name,
      description,
      price,
      type,
      img_src: food,
      id:Math.random().toString(36).slice(2)
    };

    manuallyAddedItems.push(item)
    localStorage.setItem("manuallyAddedItems",JSON.stringify(manuallyAddedItems))
    toast.success("Item Added Successfully")
    setState(initialState);

  };
  return (
    
   <>
   <Header />
     <div className="add-container">
      <Toaster position="top-right" richColors />
      <div className="add-form">
        <h2 className="mb-4">Add Item</h2>
        <form action="" onSubmit={handleAddItem}>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="text"
              name="name"
              id="name"
              placeholder=""
              value={state.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="text"
              name="description"
              id="description"
              placeholder=""
              value={state.description}
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="text"
              name="price"
              id="price"
              placeholder=""
              value={state.price}
              onChange={handleChange}
            />
            <label htmlFor="price">Price</label>
          </div>
          <select
            className="form-select mb-3 select-form border-black ps-3 pt-2 "
            aria-label=".form-select-lg example"
            onChange={handleChange}
            name="type"
            value={state.type}
          >
            <option className="select-heading">Select Type</option>
            <option >Breakfast</option>
            <option >Lunch</option>
            <option >Dinner</option>
            <option >Dessert</option>
          </select>

          <div className="submit-btn text-center mt-4 mb-3">
            <input type="submit" className="btn px-5 text-white" value="Add " />
          </div>
        </form>
      </div>
    </div>
   </>
  );
}
