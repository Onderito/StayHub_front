import React, { useState } from "react";
import { useAuth } from "../utils/AuthContext";

const ModalComponent = ({ addAccommodation }) => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createAccommodation = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:3000/api/accommodation/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      const accommodation = await response.json();
      addAccommodation(accommodation);
      document.getElementById("my_modal_3").closest("dialog").close(); // close the modal
      return;
    }
    console.log("une erreur est survenue");
  };

  const { isAuthenticated } = useAuth();

  return (
    <div className="mt-4 text-center">
      {isAuthenticated && (
        <button
          className="btn w-52 bg-indigo-500 border-none "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add Accommodation
        </button>
      )}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-lg">
            Add your accommodation !
          </h3>
          <form
            onSubmit={createAccommodation}
            className="flex flex-col mt-8 gap-4"
            action=""
          >
            <label htmlFor="file-upload">
              <input
                value={formData.image}
                onChange={handleChange}
                type="file"
                name="image"
                accept="image/*"
              />
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your location"
              className="input input-bordered w-full max-w-lg"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="input input-bordered w-full max-w-lg"
              type="text-area"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Your price"
              className="input input-bordered w-full max-w-lg"
              value={formData.price}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-white rounded-lg py-2 px-2 bg-indigo-500  hover:bg-indigo-700"
            >
              Add
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalComponent;
