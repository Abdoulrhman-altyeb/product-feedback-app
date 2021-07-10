import React, { useState } from "react";
import axios from "axios";
const AddOutlet = () => {
  const [inputData, setInputData] = useState({});
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      name: "outlet",
      type: "Outlet",

      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1010/api/pipe", [inputData])
      .then((res) => {
        console.log(res);
        setInputData({
          name: "outlet",
          type: "Outlet",
          shape: "",
          gasType: "",
          location: "",
          quantity: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleSubmit} className="mb-6">
      <div className="">
        <div className="flex justify-start gap-8 mb-6">
          <div className="">
            <label htmlFor="name" className="block  mb-4 ">
              outlet shape
            </label>
            <select
              name="shape"
              required
              className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["shape"]}
              defaultValue=""
            >
              <option value="" className=""></option>

              <option value="DIN" className="w-full">
                DIN
              </option>
              <option value="BS">AF</option>
              <option value="AF">AF</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="name" className="block  mb-4 ">
              outlet shape
            </label>
            <select
              name="gasType"
              required
              className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["gasType"]}
              defaultValue=""
            >
              <option value="" className=""></option>

              <option value="O2" className="w-full">
                O2
              </option>
              <option value="N2O">N2O</option>
              <option value="A4">A4</option>
              <option value="A7">A7</option>
              <option value="VAC">VAC</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="location" className="block mb-4 ">
              المكان
            </label>
            <input
              className="border-gray-200 h-12 border-2 py-2 px-2"
              type="text"
              name="location"
              required
              value={inputData["location"]}
              id="location"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="number" className="block  mb-4 ">
              الكمية
            </label>
            <input
              className="border-gray-200 h-12 border-2 py-2 px-2"
              type="number"
              name="quantity"
              required
              value={inputData["quantity"]}
              id="number"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button className="block  bg-accent-light  text-white py-2 px-8 text-lg  rounded-md capitalize">
        اضافة للمحزن
      </button>
    </form>
  );
};

export default AddOutlet;
