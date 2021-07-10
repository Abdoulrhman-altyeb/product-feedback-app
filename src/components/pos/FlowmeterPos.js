import React, { useState, useEffect } from "react";
const OutletsPos = ({ setCart, storageData, type }) => {
  const [inputData, setInputData] = useState({
    name: "flowmeter",
    shape: "",
    type,
    gasType: "",
    quantity: "",
  });
  const [shapes, setShapes] = useState([]);
  const [gasTypes, setGasTypes] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let exist;
    setCart((cart) => {
      exist = cart.orders.find(
        (cartItem) =>
          cartItem.name === inputData.name &&
          cartItem.gasType === inputData.gasType &&
          cartItem.shape === inputData.shape
      );
      if (exist) {
        let quantity1 = +exist.quantity;
        let quantity2 = +inputData.quantity;
        let newValue = quantity1 + quantity2;
        exist.quantity = newValue.toString();
        cart.orders.push(exist);
        let newCart = [...new Set(cart.orders)];
        return { orders: [...newCart] };
      } else {
        return { orders: [...cart.orders, inputData] };
      }
    });
    setInputData({
      name: "flowmeter",
      shape: "",
      type,
      gasType: "",
      quantity: "",
    });
  };

  const [maxLength, setMaxLength] = useState("0");

  const getObtions = (arr, type, setState, prop) => {
    arr.map((item) => {
      if (item.type === type) {
        setState((state) => {
          state.push(prop);
          return [...new Set(state)];
        });
      }
      return item;
    });
  };

  useEffect(() => {
    getObtions(storageData, type, setShapes, "flowmeter");
  }, [storageData]);

  useEffect(() => {
    if (storageData.length > 0) {
      let types = [];
      storageData.map((item) => {
        if (item.name === inputData.name && item.shape === inputData.shape) {
          types.push(item.gasType);
        }
      });
      setGasTypes([...new Set(types)]);

      storageData.map((item) => {
        if (
          item.name === inputData.name &&
          item.shape === inputData.shape &&
          item.gasType === inputData.gasType
        ) {
          setMaxLength(+item.quantity);
        }
      });
    }
  }, [inputData]);

  return (
    <div className="mb-8 pb-4">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="capitalize text-lg mb-2 font-semibold">flowmeter </h2>
        <div className="flex justify-start gap-16 mb-8">
          <div className="">
            <label htmlFor="name" className="block  mb-4 ">
              flowmeter shape{" "}
            </label>
            <select
              name="shape"
              required
              className="w-28 border-gray-200 h-12 border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["shape"]}
            >
              <option value="" className=""></option>
              {shapes.map((shape, idx) => {
                return (
                  <option key={idx} value={shape}>
                    {shape}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="">
            <label htmlFor="name" className="block mb-4 ">
              flowmeter gas{" "}
            </label>
            <select
              required
              name="gasType"
              className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["gasType"]}
            >
              <option value="" className=""></option>
              {gasTypes.map((gas, idx) => {
                return (
                  <option key={idx} value={gas}>
                    {gas}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="">
            <label htmlFor="number" className="block  mb-4 ">
              الكمية
            </label>
            <div className=" relative">
              <input
                className="border-gray-200 h-12 border-2 py-2 px-2"
                type="number"
                required
                max={maxLength}
                name="quantity"
                value={inputData["quantity"]}
                id="number"
                onChange={(e) => {
                  if (e.target.value <= maxLength) {
                    setToggle(false);

                    handleChange(e);
                  } else {
                    setToggle(!toggle);
                  }
                }}
              />
              {toggle && (
                <p className="absolute -bottom-8 right-0 text-red-500">{`*the max number is ${maxLength}`}</p>
              )}
            </div>
          </div>
        </div>
        <button className="py-2 px-4 mt-3 rounded-md bg-accent-light text-white font-bold capitalize text-xl">
          اضافة العنصر
        </button>
      </form>
    </div>
  );
};

export default OutletsPos;
