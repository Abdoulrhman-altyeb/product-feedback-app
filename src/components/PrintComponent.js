import React, { useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import uuid from "react-uuid";
import Logo from "./../images/matrixlogo.jpg";
class CartToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState(this.props.data);
    }
  }
  render() {
    return (
      <div className="p-4 h-screen" dir="rtl" id="to-print">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between flex-row-reverse pb-6 mb-6  border-b border-red-500">
            <div className="w-56">
              <img className="w-full" src={Logo} alt="matrix gas log" />
            </div>
            <div className="space-y-2">
              <p>Khartoum - Sudan</p>
              <p>P.O Box: 7896 - Postal code 11123</p>
              <p>Tel: +249 126893163</p>
              <p>Mobile: +249 126893163</p>
              <p>Email: m.hasan@matrixgas.com</p>
              <p>Email: mmalemam@yahoo.com</p>
            </div>
          </div>
          <div className="pb-4 space-y-2 border-b border-red-500 mb-6">
            <h2 className="text-center font-bold text-xl mb-4">سند تسليم</h2>
            <p>التاريخ: {this.state.data.orderDate}</p>
            <p>المرجع: MATRIX-QT-</p>
            <p>من : ماتركس</p>
            <p>
              الى: السادة\ ...................................................
            </p>
          </div>
          <div className="">
            <h2 className="my-2 font-bold text-lg text-center capitalize">
              delivery note
            </h2>
            <table
              className="w-full font-cairo border border-gray-800"
              dir="ltr"
            >
              <thead className="w-full">
                <tr className="w-full  border border-gray-800">
                  <td className="w-1/12 text-center font-bold  border-r border-gray-800">
                    No
                  </td>
                  <td className="w-10/12 pl-13 text-left font-bold border-r border-gray-800">
                    Description
                  </td>
                  <td className="w-1/12 text-center font-bold">QTY</td>
                </tr>
              </thead>
              <tbody>
                {this.state.data.orders.map((item, id) => (
                  <tr className="border border-gray-800" key={uuid()}>
                    <td className="w-1/12 py-1 text-center border-r border-gray-800">
                      {id + 1}
                    </td>
                    <td
                      className="10/12 pl-3 py-1  text-left font-bold border-r border-gray-800"
                      dir="ltr"
                    >
                      <span className="inline-block mr-2 font-bold text-gray-900">
                        Name :{" "}
                        <span className="inline-block ml-1 text-gray-800">
                          {item.name}
                        </span>
                      </span>
                      <span className="inline-block mr-2 font-bold text-gray-900">
                        Diameter :{" "}
                        <span className="inline-block ml-1 text-gray-800">
                          {item.diameter}
                        </span>
                      </span>
                      <span className="inline-block mr-2 font-bold text-gray-900">
                        Pressure :{" "}
                        <span className="inline-block ml-1 text-gray-800">
                          {item.pressure}
                        </span>
                      </span>
                    </td>
                    <td className="1/12 py-1 text-center">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 pb-4 pr-16 space-y-4 border-b border-red-500">
            <p className="text-lg">
              اسم المستلم : <span>{this.state.data.name}</span>
            </p>
            <p className="text-lg">
              التوقيع : <span>.....................................</span>
            </p>
            <p className="text-lg">
              الختم : <span>.......................................</span>
            </p>
          </div>
        </div>
        <footer>
          <p className="text-center mt-2">
            Gas plants - Central gas systems - Gas equipments - Cryogenic gases
            - Industrial & laboratory gases - Gas analyzers - Gas cylinders -
            Instruments calibration - Maintenance services - Gas engineering &
            consulting - Turn key projects
          </p>
        </footer>
      </div>
    );
  }
}

const PrintComponent = ({ data }) => {
  const componentRef = useRef();
  useEffect(() => {
    document.getElementById("print-bill").click();
  }, []);
  return (
    <div className="text-center">
      <ReactToPrint
        trigger={() => (
          <h2 id="print-bill" className="hidden">
            print the bill
          </h2>
        )}
        content={() => componentRef.current}
        documentTitle={`${data.name}`}
      />
      <div style={{ display: "none" }}>
        <CartToPrint data={data} ref={componentRef} />
      </div>
      <div></div>
    </div>
  );
};

export default PrintComponent;
