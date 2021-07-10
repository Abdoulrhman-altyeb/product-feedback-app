import React from "react";
import { Link } from "react-router-dom";
import Navitem from "./Navitem";
import cartIcon from "./../images/shopping-cart.png";
import arrow from "./../images/chevron-up.png";

const AsideNav = ({ length }) => {
  return (
    <div className="col-span-1 relative ">
      <aside className="sticky top-0 w-inherit h-screen">
        <div className="bg-gray-50 w-full h-full p-6 rounded-lg">
          <div className="h-12 w-12 mb-3 relative">
            <Link to="/cart">
              <img src={cartIcon} alt="" />
              <p className="absolute  bottom-0 text-white text-center right-0 text-sm rounded-full w-6 h-6 border-2 border-white bg-red-500">
                {length}
              </p>
            </Link>
          </div>
          <div className="flex h-4/5  flex-col justify-between ">
            <ul className="space-y-4">
              <li className="">
                <Navitem
                  title="المشتريات"
                  list={["اسطوانات", "فلاتر", "مواسير"]}
                  hrefs={["/", "/", "/"]}
                  icon={arrow}
                />
              </li>
              <li className="mr-6">
                <Link to="/storage">المخزن</Link>
              </li>
              <li className="mr-6">
                <Link to="/foo">الفواتير</Link>
              </li>
              <li className="mr-6">
                <Link to="/home">نفطة البيع</Link>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="mr-6">
                <Link to="/foo">اخرى</Link>
              </li>
              <li className="mr-6">
                <Link to="/foo">الدعم الفني</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AsideNav;
