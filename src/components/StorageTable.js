import React from "react";
import TableItem from "./TableItem";
import uuid from "react-uuid";
const StorageTable = ({ storageData }) => {
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
    if (type === "pressure") {
      return `${quantity}high`;
    } else if (type === "diameter") {
      return `${quantity}ml`;
    } else {
      return quantity;
    }
  };
  return (
    <>
      <h2 className="text-lg font-bold">المواسير</h2>
      <table className="">
        <thead>
          {storageData[0] && (
            <tr>
              {Object.keys(storageData[0]).map((key, idx) => {
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
              })}
              <td className="px-4 capitalize py-3 border-b-2 border-gray-500 text-center"></td>
            </tr>
          )}
        </thead>
        <tbody className="space-y-4">
          {storageData.map((item, idx) => {
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
                        <>
                          <TableItem
                            body={setType(item[key], key)}
                            key={uuid()}
                            id={item.id}
                          />
                        </>
                      );
                    }
                  }
                  if (key !== "id" && key !== "type") {
                    return (
                      <TableItem
                        key={uuid()}
                        body={setType(item[key], key)}
                        id={item.id}
                      />
                    );
                  }
                  return;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StorageTable;
