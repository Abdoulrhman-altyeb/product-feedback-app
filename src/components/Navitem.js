import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navitem = ({ title, list, hrefs, icon }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" space-y-4">
      <div
        className="flex items-center justify-start max-w-content cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={`w-4 h-2 ml-2 transform transition ${
            toggle ? " rotate-0 " : " rotate-180"
          }`}
        >
          <img alt="gg" className="w-full h-full" src={icon} />
        </div>
        <h3>{title}</h3>
      </div>
      {toggle && (
        <ul className={`transition  transform `}>
          {list.map((item, href) => (
            <li className="text-gray-500 mb-1">
              <Link to={hrefs[href]}>{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navitem;
