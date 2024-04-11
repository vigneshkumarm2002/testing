// import React from "react";
// import Table from "./table";

// const TransactionReport = () => {
//   const data = [
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/009",
//       "Transaction id": "CMDA_16098",
//       "Amount (INR)": 3724.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_16099",
//       "Amount (INR)": 4500.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Debit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0008/2024",
//       "File No": "RE/GR-II/09/07/109",
//       "Transaction id": "CMDA_16100",
//       "Amount (INR)": 2856.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/213",
//       "Transaction id": "CMDA_16101",
//       "Amount (INR)": 7800.00,
//       "Payment Status": "Failed",
//       "Payment Mode": "Net Banking"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/029",
//       "Transaction id": "CMDA_16108",
//       "Amount (INR)": 4215.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Debit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "09-03-2024",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_16099",
//       "Amount (INR)": 4500.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Debit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "09-03-2024",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/109",
//       "Transaction id": "CMDA_16100",
//       "Amount (INR)": 2856.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "09-03-2024",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/213",
//       "Transaction id": "CMDA_16101",
//       "Amount (INR)": 7800.00,
//       "Payment Status": "Failed",
//       "Payment Mode": "Net Banking"
//     },
//     {
//       "Action": "View",
//       "Date": "09-03-2024",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/029",
//       "Transaction id": "CMDA_16108",
//       "Amount (INR)": 4215.00,
//       "Payment Status": "Paid",
//       "Payment Mode": "Debit Card"
//     }
//   ]


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
//               <option value="option1">HDFC</option>
//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Submit
//           </button>
//           <button className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Clear
//           </button>
//         </div>
//       </div>
//       <Table data={data} />
//     </div>
//   );
// };

// export default TransactionReport;


//------------------------------------------ New CODE -----------------------------------------------

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




//-----------------------------------------------------------------------------------------------------------

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


















import React, { useState, useEffect } from "react";

const Table = ({ data, onViewClick }) => {
  return (
    <div className="w-full overflow-auto">
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
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.transactionAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'Unpaid'}</td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
          ))}
        </tbody>
      </table>
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
        fetch("http://localhost:5063/api/GateWayReport/GatewayNames")
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

        const url = `http://localhost:5063/api/GateWayReport/TransactionReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&gateway=${encodeURIComponent(gatewayValue)}`;

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
    const onViewClick = (transaction) => {
      setSelectedTransaction(transaction);
    };
  
    const closePopup = () => {
      setSelectedTransaction(null);
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
              {/* <option value="option1">HDFC</option> */}

              {/* Render options dynamically */}
              <option value="">Select Gateway</option>

              {paymentGateways.map((gateway, index) => (
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
      {data && <Table data={data} onViewClick={onViewClick} />}
      {/* Popup for displaying transaction details */}
      {selectedTransaction && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Transaction Details</h2>
            <div>
              <p><strong>Date:</strong> {selectedTransaction.transactionDate}</p>
              <p><strong>Challan No:</strong> {selectedTransaction.challanNumber}</p>
              <p><strong>File No:</strong> {selectedTransaction.fileNumber}</p>
              <p><strong>Transaction id:</strong> {selectedTransaction.cmdaOrderId}</p>
              <p><strong>Amount (INR):</strong> {selectedTransaction.transactionAmount}</p>
              <p><strong>Payment Status:</strong> {selectedTransaction.status === 2 ? 'Paid' : 'Unpaid'}</p>
              <p><strong>Payment Mode:</strong> {selectedTransaction.paymentMode}</p>
            </div>
            <button onClick={closePopup} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionReport;











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
