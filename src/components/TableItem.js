import React from "react";
import uuid from "react-uuid";

const TableItem = ({ body }) => {
  return (
    <td
      key={uuid()}
      className={` py-6 text-center text-gray-500`}
    >{`${body}`}</td>
  );
};
export default TableItem;
