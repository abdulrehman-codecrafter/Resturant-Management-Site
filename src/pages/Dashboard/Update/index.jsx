

import React, { useState } from "react";
import Header from "../../../components/Header/Header";

export default function Update() {
  const manuallyAddedItems =
    JSON.parse(localStorage.getItem("manuallyAddedItems")) || [];
  const [Items, setItems] = useState(manuallyAddedItems);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: 0, // Default to a number
    // img_src: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert price to number
    const inputValue = name === "price" ? parseFloat(value) || 0 : value;

    setEditData({ ...editData, [name]: inputValue });
  };

  const handleUpdateItem = (item) => {
    setEditData(item); // Set the current item's data for editing
    setTodoToEdit(item.id); // Store the item id being edited
    setShowEditModal(true);
  };

  const handleDeleteItem = (id) => {
    setTodoToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedItems = manuallyAddedItems.filter(
      (item) => item.id !== todoToDelete
    );
    localStorage.setItem("manuallyAddedItems", JSON.stringify(updatedItems));
    setItems(updatedItems); // Update state to trigger re-render
    setShowDeleteModal(false);
    setTodoToDelete(null);
  };

  const confirmUpdate = () => {
    const updatedItems = Items.map((item) =>
      item.id === todoToEdit ? { ...item, ...editData } : item
    );
    localStorage.setItem("manuallyAddedItems", JSON.stringify(updatedItems));
    setItems(updatedItems); // Update state with the new list
    setShowEditModal(false);
    setTodoToEdit(null);
  };

  return (
    <>
      <Header />
      <div className="all-order-items-container container ">
        <h2 className="fw-semibold text-center my-5">Delete & Update Items</h2>
        {Items.map((item, i) => (
          <div
            key={i}
            className="update-item-container mb-3  d-flex align-items-center flex-column gap-4 flex-md-row"
          >
            <img src={item.img_src} alt={item.name} />
            <h5 style={{ textTransform: "capitalize" }}>{item.name}</h5>
            <p>{item.description}</p>
            <h6>${item.price.toFixed(2)}</h6> {/* Format price to 2 decimal places */}

            <div className="action-btns">
              <button
                className="btn btn-success mb-2 px-3 me-2 "
                onClick={() => handleUpdateItem(item)}
              >
                Update
              </button>
              <button
                className="btn btn-danger mb-2 px-3"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this item?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Item</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={editData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={editData.price}
                      onChange={handleInputChange}
                      step="0.01" // Ensure two decimal precision
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={confirmUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
