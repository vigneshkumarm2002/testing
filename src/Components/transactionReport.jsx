// import React from "react";
// import Table from "./table";

// ------------------------------------------ New CODE -----------------------------------------------

// import React, { useState, useEffect } from "react";
// import Table from "./table";

// const TransactionReport = () => {
//     const data = [
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/009",
//       "Transaction id": "CMDA_16098",
//       "Amount (INR)": 3724.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Credit Card"
//     }
//   ]
//   console.log("error",data)
//   const [paymentGateways, setPaymentGateways] = useState([]);
//   const [apiResponse, setApiResponse] = useState(null); // State variable to store API response


//   const handleSubmit = () => {
//     const fromDateValue = document.getElementById("from-date").value;
//     const toDateValue = document.getElementById("to-date").value;
//     const gatewayValue = document.getElementById("payment-gateway").value;
//     // Check if required fields are empty
//     if (!fromDateValue || !toDateValue || !gatewayValue) {
//       console.error("Required fields are empty.");
//       return;
//     }

// //     fetch("http://localhost:5063/api/GateWayReport/TransactionReportSave", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //       fromdate: fromDateValue,
// //       todate: toDateValue,
// //       gateway: gatewayValue,
// //     }),
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       setApiResponse(data); // Update state with API response
// //     })
// //     .catch((error) => {
// //       console.error("Error fetching transaction report:", error);
// //     });
// // };

// const url = `http://localhost:5063/api/GateWayReport/TransactionReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&gateway=${encodeURIComponent(gatewayValue)}`;

//   fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setApiResponse(data); // Update state with API response
//     })
//     .catch((error) => {
//       console.error("Error fetching transaction report:", error);
//     });
// };

//   useEffect(() => {
//     // Fetch payment gateways data from API
//     fetch("http://localhost:5063/api/GateWayReport/GatewayNames")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming data is an array of payment gateway options
//         setPaymentGateways(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching payment gateways:", error);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">Transaction Reports</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div className="w-full flex flex-col sm:flex-row gap-4 ">
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="from-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               From Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="from-date"
//                 name="from-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="to-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               To Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="to-date"
//                 name="to-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="payment-gateway"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Payment Gateway
//           </label>
//           <div className="mt-1">
//             <select
//               id="payment-gateway"
//               name="payment-gateway"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               {/* <option value="option1">HDFC</option> */}

//               {/* Render options dynamically */}
//               <option value="">Select Gateway</option>

//               {paymentGateways.map((gateway, index) => (
//                 <option key={index} value={gateway}>{gateway}</option>
//               ))}

//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button
//             onClick={handleSubmit} // Attach submit button click handler
//             className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded"
//           >
//             Submit
//           </button>
//           <button
//             className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//       {/* Display API response data */}
//       {/* {apiResponse && <Table data={apiResponse} />} */}
//       <Table data={data} />
//     </div>
//   );
// };

// export default TransactionReport;

// -----------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";

// const Table = ({ data }) => {
//   return (
//     <div className="w-full overflow-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Action
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Challan No
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               File No
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Transaction id
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Amount (INR)
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Payment Status
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Payment Mode
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data.map((transaction) => (
//             <tr key={transaction.transactionId}>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="text-blue-600 hover:text-blue-900">View</button>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{transaction.transactionAmount}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'Unpaid'}</td>
//               <td className="px-6 py-4 whitespace-nowrap"></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const TransactionReport = () => {
//     const [paymentGateways, setPaymentGateways] = useState([]);
//     const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Fetch payment gateways data from API
//         fetch("http://localhost:5063/api/GateWayReport/GatewayNames")
//           .then((response) => response.json())
//           .then((data) => {
//             // Assuming data is an array of payment gateway options
//             setPaymentGateways(data);
//           })
//           .catch((error) => {
//             console.error("Error fetching payment gateways:", error);
//           });
//       }, []);

//     const handleSubmit = () => {
//         const fromDateValue = document.getElementById("from-date").value;
//         const toDateValue = document.getElementById("to-date").value;
//         const gatewayValue = document.getElementById("payment-gateway").value;
//         // Check if required fields are empty
//         if (!fromDateValue || !toDateValue || !gatewayValue) {
//           console.error("Required fields are empty.");
//           return;
//         }

//         const url = `http://localhost:5063/api/GateWayReport/TransactionReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&gateway=${encodeURIComponent(gatewayValue)}`;

//         fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             setApiResponse(data); // Update state with API response
//             setData(data); // Update state with API response for table display
//           })
//           .catch((error) => {
//             console.error("Error fetching transaction report:", error);
//           });
//     };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">Transaction Reports</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div className="w-full flex flex-col sm:flex-row gap-4 ">
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="from-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               From Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="from-date"
//                 name="from-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="to-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               To Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="to-date"
//                 name="to-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="payment-gateway"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Payment Gateway
//           </label>
//           <div className="mt-1">
//             <select
//               id="payment-gateway"
//               name="payment-gateway"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               {/* <option value="option1">HDFC</option> */}

//               {/* Render options dynamically */}
//               <option value="">Select Gateway</option>

//               {paymentGateways.map((gateway, index) => (
//                 <option key={index} value={gateway}>{gateway}</option>
//               ))}

//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button
//             onClick={handleSubmit} // Attach submit button click handler
//             className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded"
//           >
//             Submit
//           </button>
//           <button
//             className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//       {/* Display API response data */}
//       {data && <Table data={data} />}
//     </div>
//   );
// };

// export default TransactionReport;

//--------------------------------------------Vignesh 14/04/2024--------------------------------------------------------------


import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "./viewModal";
import { Environment } from "../Environment";

const Table = ({ data, pagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false)
  const [singleData, setSingleData] = useState(null)

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (indexOfLastRow < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle click on 'View'
  const onViewClick = (fileDetails) => {

    const data = {

      "Date": new Date(fileDetails.transactionDate).toLocaleDateString(),
      " Challan No": fileDetails.challanNumber,
      " File No": fileDetails.fileNumber,
      " Transaction id": fileDetails.cmdaOrderId,
      "Amount (INR)": formatAmountWithCommas(fileDetails.transactionAmount),
      " Payment Status": fileDetails.status === 2 ? 'Paid' : 'Unpaid',
      " Payment Mode": "Credit Card"                           //Doubt Ram - Need to check 
    }
    setSingleData(data)
    setShowModal(true)
  };


  //Comma separation Amount Function
  function formatAmountWithCommas(amount) {
    // Convert the number to a floating-point number
    const number = parseFloat(amount);

    // If the number is not a valid number, return it as is
    if (isNaN(number)) {
      return amount;
    }

    // Format the number with thousand separators
    const formattedNumber = number.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });

    // If the original number has no decimal part, append .00
    if (formattedNumber.indexOf('.') === -1) {
      return formattedNumber + '.00';
    }

    return formattedNumber;
  }




  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      <div className="ml-auto flex gap-4">
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <PrinterIcon className="w-4 h-4 " />
          Print
        </button>
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <ArrowDownTrayIcon className="w-4 h-4" />
          Export
        </button>
      </div>
      <div className="w-full overflow-y-auto styleScroll pb-2">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Challan No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction id
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount (INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {(currentRows ? currentRows : data).map((transaction) => (
              <tr key={transaction.transactionId}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.transactionAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'NotPaid'}</td>
                {/* //Doubt Ram - Need to check */}
                <td className="px-6 py-4 whitespace-nowrap">Credit Card</td>
              </tr>
            ))}
          </tbody>
        </table>
        {pagination && data?.length  >0 && (
          <div>
            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white py-4"
              aria-label="Pagination"
            >
              <div className="block">
                <p className="text-left text-xs text-gray-700">
                  Showing <span className="font-medium">{currentPage}</span> of{" "}
                  <span className="font-medium">
                    {Math.ceil(data.length / rowsPerPage)}
                  </span>{" "}
                  pages
                </p>
              </div>
              <div className="flex  justify-between sm:justify-end">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={indexOfLastRow >= data.length}
                  className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        )}
        <SingleReport open={showModal} setOpen={setShowModal} data={singleData} />
      </div>
    </div>
  );
};

const TransactionReport = () => {
  const [paymentGateways, setPaymentGateways] = useState([]);
  const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
  const [data, setData] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State variable to store selected transaction for popup

  useEffect(() => {
    // Fetch payment gateways data from API
    // fetch("http://localhost:5063/api/GateWayReport/GatewayNames")
    fetch(`${Environment.apiBaseUrl}/api/GateWayReport/GatewayNames`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of payment gateway options
        setPaymentGateways(data);
      })
      .catch((error) => {
        console.error("Error fetching payment gateways:", error);
      });
  }, []);

  const handleSubmit = () => {
    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    const gatewayValue = document.getElementById("payment-gateway").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue || !gatewayValue) {
      console.error("Required fields are empty.");
      return;
    }

    const url = `${Environment.apiBaseUrl}/api/GateWayReport/TransactionReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&gateway=${encodeURIComponent(gatewayValue)}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data); // Update state with API response
        setData(data); // Update state with API response for table display
      })
      .catch((error) => {
        console.error("Error fetching transaction report:", error);
      });
  };


  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">Transaction Reports</h1>
      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <div className="w-full flex flex-col sm:flex-row gap-4 ">
          <div className="w-full sm:w-[50%]">
            <label
              htmlFor="from-date"
              className="block text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="from-date"
                name="from-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <label
              htmlFor="to-date"
              className="block text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="to-date"
                name="to-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="payment-gateway"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Gateway
          </label>
          <div className="mt-1">
            <select
              id="payment-gateway"
              name="payment-gateway"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              {/* Render options dynamically */}
              <option value="">Select Gateway</option>

              {paymentGateways?.map((gateway, index) => (
                <option key={index} value={gateway}>{gateway}</option>
              ))}

            </select>
          </div>
        </div>

        <div className=" flex gap-4">
          <button
            onClick={handleSubmit} // Attach submit button click handler
            className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded"
          >
            Submit
          </button>
          <button
            className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
          >
            Clear
          </button>
        </div>
      </div>
      {/* Display API response data */}
      {data && <Table data={data}  />}
      
  
    </div>
  );
};

export default TransactionReport;


//-------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Table, TransactionDetails } from "./testTable"; // Make sure to import the Table and TransactionDetails components

// const TransactionReport = () => {
//   const [paymentGateways, setPaymentGateways] = useState([]);
//   const [apiResponse, setApiResponse] = useState(null);
//   const [data, setData] = useState([]);
//   const [selectedTransaction, setSelectedTransaction] = useState(null);

//   useEffect(() => {
//     // Fetch payment gateways data from API
//     fetch("http://localhost:5063/api/GateWayReport/GatewayNames")
//       .then((response) => response.json())
//       .then((data) => {
//         setPaymentGateways(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching payment gateways:", error);
//       });
//   }, []);

//   const handleSubmit = () => {
//     const fromDateValue = document.getElementById("from-date").value;
//     const toDateValue = document.getElementById("to-date").value;
//     const gatewayValue = document.getElementById("payment-gateway").value;
//     // Check if required fields are empty
//     if (!fromDateValue || !toDateValue || !gatewayValue) {
//       console.error("Required fields are empty.");
//       return;
//     }

//     const url = `http://localhost:5063/api/GateWayReport/TransactionReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&gateway=${encodeURIComponent(gatewayValue)}`;

//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setApiResponse(data); // Update state with API response
//         setData(data); // Update state with API response for table display
//       })
//       .catch((error) => {
//         console.error("Error fetching transaction report:", error);
//       });
// };

//   const onViewClick = (transaction) => {
//     setSelectedTransaction(transaction);
//   };

//   const closePopup = () => {
//     setSelectedTransaction(null);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium">Transaction Reports</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div className="w-full flex flex-col sm:flex-row gap-4 ">
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="from-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               From Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="from-date"
//                 name="from-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-[50%]">
//             <label
//               htmlFor="to-date"
//               className="block text-sm font-medium text-gray-700"
//             >
//               To Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="to-date"
//                 name="to-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="payment-gateway"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Payment Gateway
//           </label>
//           <div className="mt-1">
//             <select
//               id="payment-gateway"
//               name="payment-gateway"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               {/* <option value="option1">HDFC</option> */}

//               {/* Render options dynamically */}
//               <option value="">Select Gateway</option>

//               {paymentGateways.map((gateway, index) => (
//                 <option key={index} value={gateway}>{gateway}</option>
//               ))}

//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button
//             onClick={handleSubmit} // Attach submit button click handler
//             className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded"
//           >
//             Submit
//           </button>
//           <button
//             className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//       {data && <Table data={data} onViewClick={onViewClick} />}
//       {/* Display selected transaction details */}
//       {selectedTransaction && (
//         <div className="bg-white p-8 rounded-lg">
//           <h2 className="text-lg font-medium mb-4">Transaction Details</h2>
//           <TransactionDetails transaction={selectedTransaction} />
//           <button onClick={closePopup} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransactionReport;
