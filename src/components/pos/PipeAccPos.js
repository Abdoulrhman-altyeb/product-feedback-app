import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
const PosItem = ({ setCart, storageData, type }) => {
  const [inputData, setInputData] = useState({
    name: "",
    kind: "",
    type,
    pressure: "",
    quantity: "",
  });
  const [names, setNames] = useState([]);
  const [kind, setKind] = useState([]);
  const [pressures, setPressures] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, type, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let exist;
    setCart((cart) => {
      exist = cart.orders.find(
        (cartItem) =>
          cartItem.name === inputData.name &&
          cartItem.pressure === inputData.pressure &&
          cartItem.kind === inputData.kind
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
      name: "",
      kind: "",
      type,
      pressure: "",
      quantity: "",
    });
  };

  const [maxLength, setMaxLength] = useState("0");

  const setType = (quantity, type) => {
    if (type == "pressure") {
      return `${quantity}`;
    } else if (type == "diameter") {
      return `${quantity}`;
    } else {
      return quantity;
    }
  };

  const getObtions = (arr, type, setState, prop) => {
    arr.map((item) => {
      if (item.type === type) {
        setState((state) => {
          state.push(setType(item[prop], prop));
          return [...new Set(state)];
        });
      }
      return item;
    });
  };

  useEffect(() => {
    getObtions(storageData, type, setNames, "name");
  }, [storageData]);

  useEffect(() => {
    if (type === "PipeAccessories") {
      if (storageData.length > 0) {
        let diams = [];
        storageData.map((item) => {
          if (item.name === inputData.name) {
            kind.push(item.kind);
          }
        });
        setKind([...new Set(diams)]);

        let pres = [];
        storageData.map((item) => {
          if (item.name === inputData.name && item.kind === inputData.kind) {
            pres.push(item.pressure);
          }
        });
        setPressures([...new Set(pres)]);

        storageData.map((item) => {
          if (
            item.name === inputData.name &&
            item.kind === inputData.kind &&
            item.pressure === inputData.pressure
          ) {
            setMaxLength(+item.quantity);
          }
        });
      }
    }
  }, [inputData]);

  return (
    <div className="mb-8 pb-4">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="capitalize text-lg mb-2 font-semibold">
          ملحقات المواسير
        </h2>
        <div className="flex justify-start gap-16 mb-8">
          <div className="">
            <label htmlFor="name" className="block mb-4 ">
              اسم الملحق
            </label>
            <select
              name="name"
              required
              value={inputData["name"]}
              className="w-28 border-gray-200 h-12 border-2 py-2 px-2"
              onChange={handleChange}
            >
              {names.map((name, idx) => {
                return (
                  <option key={uuid()} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
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
              placeholder="eg: 12-12"
              value={inputData["kind"]}
            >
              <option value="" className=""></option>
              {kind.map((kind, idx) => {
                return (
                  <option key={uuid()} value={kind}>
                    {kind}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="">
            <label htmlFor="name" className="block mb-4 ">
              ضفط الملحق
            </label>
            <select
              required
              name="pressure"
              className="w-28 border-gray-200 h-12  border-2 py-2 px-2"
              onChange={handleChange}
              value={inputData["pressure"]}
              placeholder="ضغط eg:8high"
            >
              <option value="" className=""></option>
              {pressures.map((pressure, idx) => {
                return (
                  <option key={uuid()} value={pressure}>
                    {pressure}High
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
                placeholder="عدد المواسير"
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

export default PosItem;
