import React from "react";
import TableItem from "./TableItem";
import TableDel from "./TableDel";
import uuid from "react-uuid";

const Table = ({ cartData, types, setTypes, setData, data }) => {
  const arabicWords = ["الاسم", "المكان", "الضعط", "الكمية", "القطر"];
  const translater = (key) => {
    if (key === "name") return arabicWords[0];
    if (key === "location") return arabicWords[1];
    if (key === "pressure") return arabicWords[2];
    if (key === "quantity") return arabicWords[3];
    if (key === "diameter") return arabicWords[4];
    return key;
  };
  const setType = (quantity, type) => {
    if (type == "pressure") {
      return `${quantity}high`;
    } else if (type == "diameter") {
      return `${quantity}ml`;
    } else {
      return quantity;
    }
  };
  return (
    <div key={uuid}>
      <h2>المواسير</h2>
      <table className="">
        <thead>
          {data[0] && (
            <tr key={uuid}>
              {Object.keys(data[0]).map((key) => {
                if (key !== "id" && key !== "type") {
                  return (
                    <td
                      key={uuid()}
                      className="px-16  capitalize py-3 border-b-2 border-gray-500 text-center"
                    >
                      {translater(key)}
                    </td>
                  );
                }
                return data[key];
              })}
              <td
                key={uuid()}
                className="px-4 capitalize py-3 border-b-2 border-gray-500 text-center"
              ></td>
            </tr>
          )}
        </thead>
        <tbody className="space-y-4">
          {data.map((item, idx) => {
            return (
              <tr
                key={uuid()}
                className={`relative py-4  ${
                  idx % 2 === 0 ? "  " : " bg-gray-50 "
                }`}
              >
                {Object.keys(item).map((key, idx2) => {
                  if (Object.keys(item).length - 1 === idx2) {
                    if (key !== "id" && key !== "type") {
                      return (
                        <React.Fragment key={uuid()}>
                          <TableItem
                            body={setType(item[key], key)}
                            key={uuid()}
                          />

                          <TableDel
                            setData={setData}
                            cartData={cartData}
                            tableItem={item}
                            type={item.type}
                            types={types}
                            key={uuid()}
                            setTypes={setTypes}
                          />
                        </React.Fragment>
                      );
                    }
                    return (
                      <TableDel
                        setData={setData}
                        cartData={cartData}
                        type={item.type}
                        setTypes={setTypes}
                        tableItem={item}
                        key={uuid()}
                        types={types}
                      />
                    );
                  }
                  if (key !== "id" && key !== "type") {
                    return (
                      <TableItem key={uuid()} body={setType(item[key], key)} />
                    );
                  }
                  return;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
