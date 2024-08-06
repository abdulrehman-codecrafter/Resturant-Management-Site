
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import { Toaster, toast } from "sonner";

const initialState = { subTotal: 0, tax: 0, total: 0 };

export default function Order() {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];
  const allOrderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

  // Filter items to only include those that belong to the logged-in user
  const loggedUserItems = allOrderItems.filter(
    (item) => item.user_id === loggedUser.user_id
  );

  const [state, setState] = useState(initialState);
  const [orderItems, setOrderItems] = useState(loggedUserItems);

  // Calculate prices whenever the order items change
  useEffect(() => {
    calculatePrices(orderItems);
  }, [orderItems]);

  // Function to calculate subtotal, tax, and total
  const calculatePrices = (items) => {
    let subtotal = items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    subtotal = parseFloat(subtotal.toFixed(2)); // Fix to 2 decimal places
    const taxAmount = parseFloat(((subtotal * 18) / 100).toFixed(2)); // 18% tax
    const totalAmount = parseFloat((subtotal + taxAmount).toFixed(2));

    setState({ subTotal: subtotal, tax: taxAmount, total: totalAmount });
  };

  // Function to handle quantity changes
  const handleQuantityChange = (id, delta) => {
    const newOrderItems = orderItems.map((item) => {
      if (item.id === id && loggedUser.user_id === item.user_id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setOrderItems(newOrderItems);

    // Update only the logged-in user's items in allOrderItems
    const newAllOrderItems = allOrderItems.map((item) => {
      if (item.id === id && loggedUser.user_id === item.user_id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    localStorage.setItem("orderItems", JSON.stringify(newAllOrderItems));

    // toast.success("Item quantity updated");
  };

  // Function to handle item removal
  const handleDeleteItem = (id) => {
    const newOrderItems = orderItems.filter(
      (item) => item.id !== id || loggedUser.user_id !== item.user_id
    );
    setOrderItems(newOrderItems);

    // Update only the logged-in user's items in allOrderItems
    const newAllOrderItems = allOrderItems.filter(
      (item) => item.id !== id || loggedUser.user_id !== item.user_id
    );
    localStorage.setItem("orderItems", JSON.stringify(newAllOrderItems));

    toast.success("Item removed from cart");
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <Header />
      <div className="container">
        <h2 className="text-center fw-semibold my-5">Order Summary</h2>
        <div className="all-order-items-container ">
          {orderItems.map((item, i) => (
            <div
              key={i}
              className="order-item-container mb-3  d-flex align-items-center flex-column gap-4 flex-md-row"
            >
              <img src={item.img_src} alt={item.name} />
              <h5 style={{ textTransform: "capitalize" }}>{item.name}</h5>
              <h6>${item.price}</h6>
              <div className="quantity-counter">
                <button
                  className="btn btn-dark counter-btn rounded-0 px-3 py-2 text-white"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
                <div className="border border-black  px-3 py-2 counter">{item.quantity}</div>
                <button
                  className="btn btn-dark counter-btn rounded-0 px-3 py-2 text-white"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger px-3"
                onClick={() => handleDeleteItem(item.id)}
              >
                Dlt
              </button>
            </div>
          ))}
        </div>

        <div className="summary-container mb-3 d-flex justify-content-end">
          <div className="bill-summary border border-black p-4 mt-4">
            <h5>Bill Summary</h5>
            <div className="d-flex">
              <div className="bill-summary-headings">Sub Total :</div>
              <div>${state.subTotal}</div>
            </div>
            <div className="d-flex">
              <div className="bill-summary-headings">Tax :</div>
              <div>${state.tax}</div>
            </div>
            <hr />
            <div className="d-flex">
              <div className="bill-summary-headings">Total :</div>
              <div>${state.total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

