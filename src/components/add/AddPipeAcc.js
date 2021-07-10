import React, { useState } from "react";
import axios from "axios";
const AddPipeAcc = () => {
  const [inputData, setInputData] = useState({});
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      type: "PipeAccessories",
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1010/api/pipeAcc", [inputData])
      .then((res) => {
        console.log(res);
        setInputData({
          name: "",
          type: "PipeAccessories",
          pressure: "",
          kind: "",
          location: "",
          quantity: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <h3 className="font-semibold text-gray-700 mb-3">ملحقات المواسير</h3>
        <div className="flex justify-start gap-8 mb-4">
          <div className="">
            <label htmlFor="name" className="block mb-4 ">
              اسم الملحق
            </label>
            <input
              className="border-gray-200 h-12 border-2 py-2 px-2"
              type="text"
              name="name"
              required
              id="name"
              value={inputData["name"]}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="name" className="block  mb-4 ">
              نوع الملحق
            </label>
            <select
              name="kind"
              required
              className="w-28 border-gray-200 h-12 border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["kind"]}
              defaultValue=""
              required
            >
              <option value="" className=""></option>
              <option value="12*12">12*12 ml</option>
              <option value="12*15">12*15 ml</option>
              <option value="12*22">12*22 ml</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="name" className="block  mb-4 ">
              ضفط الملحق
            </label>
            <select
              name="pressure"
              required
              className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["pressure"]}
              defaultValue=""
            >
              <option value="" className=""></option>

              <option value="8" className="w-full">
                8high
              </option>
              <option value="10">10high</option>
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

export default AddPipeAcc;
