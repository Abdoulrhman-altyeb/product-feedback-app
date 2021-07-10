import React from "react";
import uuid from "react-uuid";

const TableDel = ({ tableItem, types, type, setTypes, setData }) => {
  return (
    <td
      key={uuid()}
      onClick={() => {
        let items = types;
        setData((cartData) => {
          setTypes(() => {
            if (items) {
              if (items[type]?.length === 1) {
                delete items[type];
              }
            }
            return items;
          });

          let isTargetItem = true;

          let filteredData = cartData.orders.filter((cartItem) => {
            let isEquale = [];
            Object.keys(cartItem).map((key) => {
              if (key !== "type") {
                isEquale.push(cartItem[key] === tableItem[key]);
              }
            });
            if (isEquale.every((item) => item === true)) {
              isTargetItem = false;
            } else {
              isTargetItem = true;
            }
            return isTargetItem;
          });
          return {
            orders: [...filteredData],
          };
        });
      }}
    >
      <p className="px-4 py-2  rounded-md transtion hover:bg-red-100 cursor-pointer text-center text-red-500">
        حذف
      </p>
    </td>
  );
};

export default TableDel;
