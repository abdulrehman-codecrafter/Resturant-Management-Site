import React from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import logo from "../../../assets/food.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="dashboard-container d-flex gap-3 justify-content-center flex-wrap">
          <div className="add-card me-2 mb-2">
            <div className="item-card  px-4 py-4">
              <img src={logo} alt="" className="mb-3" />
              <h4 className="text-center">Add Item</h4>
              <p className="">
                Card for updating and deleting items, allowing admin to
                efficiently.
              </p>

              <div className="item-footer">
                
                <Link
                  to="/dashboard/add"
                  className="btn btn-success text-white"
                >
                  {" "}
                  Add Item
                </Link>
              </div>
            </div>
          </div>
          <div className="update-card">
            <div className="item-card  px-4 py-4">
              <img src={logo} alt="" className="mb-3" />
              <h4 className="text-center">Update Item</h4>
              <p className="">
                Card for adding items, enabling quick and
                efficient management.
              </p>

              <div className="item-footer">
                <Link
                  to="/dashboard/update"
                  className="btn btn-success text-white"
                >
                  Update Item
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
