// import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import React from "react";

// const MISLocalBody = () => {
//   const data = [
//     [
//       "View",
//       "RE/GR-II/09/07/0091",
//       "GCC",
//       "Sembarambakkam",
//       "Karpagam",
//       "Thiruvallur",
//       "Planning Permission",
//       "Layout",
//       3000.0,
//       500.0,
//       3500.0,
//       14000.0,
//       0.0,
//       14000.0,
//       53000.0,
//       0.0,
//       53000.0,
//       256000.0,
//       0.0,
//       256000.0,
//       10000.0,
//       0.0,
//       10000.0,
//       297000.0,
//       0.0,
//       297000.0,
//       390000.0,
//       0.0,
//       390000.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       500.0,
//       0.0,
//       500.0,
//       0.0,
//       0.0,
//       0.0,
//       2000.0,
//       0.0,
//       2000.0,
//       0.0,
//       0.0,
//       0.0,
//       1000.0,  0.0,  1000.0,
//       1027000,
//     ],
//     [
//       "View",
//       "RE/GR-II/09/07/019",
//       "Aminjikarai",
//       "Ramapuram",
//       "Dugar Housing Limited",
//       "Chennai",
//       "Completion Certificate",
//       "Site Approval",
//       5000.0,
//       3000.0,
//       0.0,
//       19000.0,
//       1000.0,
//       20000.0,
//       70000.0,
//       10000.0,
//       80000.0,
//       300000.0,
//       20000.0,
//       320000.0,
//       20000.0,
//       1000.0,
//       21000.0,
//       400000.0,
//       0.0,
//       400000.0,
//       500000.0,
//       0.0,
//       500000.0,
//       0.0,
//       0.0,
//       0.0,
//       1000.0,
//       0.0,
//       1000.0,
//       500.0,
//       0.0,
//       500.0,
//       0.0,
//       0.0,
//       0.0,
//       2000.0,
//       0.0,
//       2000.0,
//       3000.0,
//       0.0,
//       3000.0,
//       2000.0,  0.0,  2000.0,
//       1349500,
//     ],
//     [
//       "View",
//       "RE/GR-II/09/07/1091",
//       "Tiruvottiyur",
//       "Mundram Kattalai",
//       "Kushee",
//       "Kancheepuram",
//       "Planning Clearance",
//       "Reclassification",
//       8000.0,
//       0.0,
//       8000.0,
//       25000.0,
//       0.0,
//       25000.0,
//       65000.0,
//       0.0,
//       65000.0,
//       18000.0,
//       0.0,
//       18000.0,
//       30000.0,
//       0.0,
//       30000.0,
//       25000.0,
//       0.0,
//       25000.0,
//       400000.0,
//       0.0,
//       400000.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       4000.0,
//       0.0,
//       4000.0,
//       2000.0,
//       0.0,
//       2000.0,
//       3000.0,
//       0.0,
//       3000.0,
//       1000.0,
//       0.0,
//       1000.0,
//       581000,
//     ],
//     [
//       "View",
//       "RE/GR-II/09/07/2131",
//       "Chengalpattu",
//       "Hasthinapuram",
//       "Karpagam",
//       "Chengalpattu",
//       "Completion Certificate",
//       "Building",
//       10000.0,
//       0.0,
//       10000.0,
//       35000.0,
//       0.0,
//       35000.0,
//       75000.0,
//       0.0,
//       75000.0,
//       22000.0,
//       0.0,
//       22000.0,
//       40000.0,
//       0.0,
//       40000.0,
//       30000.0,
//       0.0,
//       30000.0,
//       700000.0,
//       0.0,
//       700000.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       0.0,
//       6000.0,
//       0.0,
//       6000.0,
//       2000.0,
//       0.0,
//       2000.0,
//       3000.0,
//       0.0,
//       3000.0,
//       3000.0,
//       0.0,
//       3000.0,
//       926000,
//     ],
//   ];

//   const TotalData = [
//     "Total",
//     26000.0,
//     3500.0,
//     21500.0,
//     93000.0,
//     1000.0,
//     94000.0,
//     263000.0,
//     10000.0,
//     273000.0,
//     596000.0,
//     20000.0,
//     616000.0,
//     100000.0,
//     1000.0,
//     101000.0,
//     752000.0,
//     0.0,
//     752000.0,
//     1990000.0,
//     0.0,
//     1990000.0,
//     0.0,
//     0.0,
//     0.0,
//     1000.0,
//     0.0,
//     1000.0,
//     1000.0,
//     0.0,
//     1000.0,
//     10000.0,
//     0.0,
//     10000.0,
//     8000.0,
//     0.0,
//     8000.0,
//     9000.0,
//     0.0,
//     9000.0,
//     7000.0,  0.0,  7000.0,
//     3883500
//   ];

//   function formatAmountWithCommas(amount) {
//     // Convert the number to a floating-point number
//     const number = parseFloat(amount);

//     // If the number is not a valid number, return it as is
//     if (isNaN(number)) {
//         return amount;
//     }

//     // Format the number with thousand separators
//     const formattedNumber = number.toLocaleString("en-IN", {
//         maximumFractionDigits: 2,
//         minimumFractionDigits: 2
//     });

//     // If the original number has no decimal part, append .00
//     if (formattedNumber.indexOf('.') === -1) {
//         return formattedNumber + '.00';
//     }

//     return formattedNumber;
// }

// const dropDown = [
//     { name: 'GCC', value: 'gcc' },
//     { name: 'Karalappakkam', value: 'karalappakkam' },
//     { name: 'Avadi', value: 'avadi' },
//     { name: 'Arakkambakkam', value: 'arakkambakkam' },
//     { name: 'Alathur', value: 'alathur' },
//     { name: 'Vellacheri', value: 'vellacheri' }
//   ];

//   return (

//     <div className='flex flex-col gap-4'>
//     <h1 className="text-xl font-medium ">Local Body Reports</h1>
// <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//   <div className="w-full flex flex-col sm:flex-row gap-4 ">
//     <div className="w-full sm:w-[50%]">
//       <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
//         From Date
//       </label>
//       <div className="mt-1">
//         <input
//           type="date"
//           id="from-date"
//           name="from-date"
//           className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//         />
//       </div>
//     </div>
//     <div className="w-full sm:w-[50%]">
//       <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
//         To Date
//       </label>
//       <div className="mt-1">
//         <input
//           type="date"
//           id="to-date"
//           name="to-date"
//           className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//         />
//       </div>
//     </div>
//   </div>

//   <div>
//     <label htmlFor="local-body" className="block text-sm font-medium text-gray-700">
// Local body
//     </label>
//     <div className="mt-1">
//       <select
//         id="local-body"
//         name="local-body"
//         className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//       >
//                   {dropDown?.map((item, index) => (
// <option key={index} value={item.value} className='whitespace-normal'>{item.name} </option>
// ))}

//       </select>
//     </div>
//   </div>

//   <div className=" flex gap-4">
//     <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//       Submit
//     </button>
//     <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//       Clear
//     </button>
//   </div>
// </div>


// <div className="w-full flex flex-col gap-4 mt-4">
//       <div className="ml-auto flex gap-4">
//         <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//           <PrinterIcon className="w-4 h-4 " />
//           Print
//         </button>
//         <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//           <ArrowDownTrayIcon className="w-4 h-4" />
//           Export
//         </button>
//       </div>

//     <div className="w-full overflow-y-auto styleScroll pb-2">
//       <table className="w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50 ">
//           <tr>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Action
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               File No
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Local Body Name
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Village
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Applicant Name
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               District
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Type of Application
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Proposal Type
//             </th>

//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Development charges for land Sq.m.
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Development charges for Building per Sq.m.
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Requlation Charge for land
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Security Deposit for building
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Security Deposit for Display Board
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               IDC - CMWSSB(For sewered area only)
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               I & A Charge
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               OSR Charges
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Premium FSI Charges
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Flag Day Charge
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Caution Deposit
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               Balance Scrutiny Fees
//             </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               colSpan="3"
//             >
//               SD - STP
//             </th>
//             <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Shelter fee
//                 </th>
//             <th
//               className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//               rowSpan="2"
//             >
//               Total Balance (INR)
//             </th>
//           </tr>
//           <tr>
//             {[...Array(14)].map((_, index) => (
//               <React.Fragment key={index}>
//                 <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                   Total fees (INR)
//                 </th>
//                 <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                   Penal Interest (INR)
//                 </th>
//                 <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                   Total Balance
//                 </th>
//               </React.Fragment>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {data?.map((rowData, rowIndex) => {
//             return (
//               <tr key={rowIndex}>
//                 {rowData?.map((item, itemIndex) => {
//                   return (
//                     <td
//                       className={`px-2 py-4 text-xs ${
//                         item === "View"
//                           ? "text-blue-500 cursor-pointer "
//                           : "text-gray-900 "
//                       } ${!isNaN(item) ? "text-right" : ""}`}
//                       key={itemIndex}
//                     >
//                       {!isNaN(item) ? formatAmountWithCommas(item) : item}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//           <tr></tr>
//           <tr>
//             <td colSpan={7}></td>
//             {TotalData?.map((data, index) => {
//               return (
//                 <td
//                   className={`px-2 py-4 text-xs text-gray-900 ${
//                     !isNaN(data) ? "text-right" : ""
//                   }`}
//                   key={index}
//                 >
//                   {!isNaN(data) ? formatAmountWithCommas(data) : data}
//                 </td>
//               );
//             })}
//           </tr>
//         </tbody>
//       </table>
//     </div>


//     </div>

//     </div>
//   );
// };

// export default MISLocalBody;



//------------------------------ new code Ram 20/04/2024 --------------------------

// import React, { useState, useEffect } from "react";
// import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import SingleReport from "../viewModal";


// const MISLocalBody = () => {
//   const [localBodyNames, setlocalBodyNames] = useState([]);
//   const [apiResponse, setApiResponse] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch localbody names data from API
//     fetch("http://localhost:5063/api/MISReport/LocalBodyNames")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming data is an array of localbody names options
//         setlocalBodyNames(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching Local Body Names:", error);
//       });
//   }, []);

//   function formatAmountWithCommas(amount) {
//     // Convert the number to a floating-point number
//     const number = parseFloat(amount);

//     // If the number is not a valid number, return it as is
//     if (isNaN(number)) {
//       return amount;
//     }

//     // Format the number with thousand separators
//     const formattedNumber = number.toLocaleString("en-IN", {
//       maximumFractionDigits: 2,
//       minimumFractionDigits: 2
//     });

//     // If the original number has no decimal part, append .00
//     if (formattedNumber.indexOf('.') === -1) {
//       return formattedNumber + '.00';
//     }

//     return formattedNumber;
//   }
//   const handleSubmit = () => {

//     const fromDateValue = document.getElementById("from-date").value;
//     const toDateValue = document.getElementById("to-date").value;
//     const localbodyValue = document.getElementById("local-body").value;
//     // Check if required fields are empty
//     if (!fromDateValue || !toDateValue || !localbodyValue) {
//       console.error("Required fields are empty.");
//       return;
//     }

//     const url = `http://localhost:5063/api/MISReport/LocalBodyReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&localbody=${encodeURIComponent(localbodyValue)}`;

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
//         console.error("Error fetching Local-Body Report:", error);
//       });
//   };

//   useEffect(() => {
//     console.log("data", apiResponse)
//   }, [apiResponse])


//   return (

//     <div className='flex flex-col gap-4'>
//       <h1 className="text-xl font-medium ">Local Body Reports</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div className="w-full flex flex-col sm:flex-row gap-4 ">
//           <div className="w-full sm:w-[50%]">
//             <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
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
//             <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
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
//           <label htmlFor="local-body" className="block text-sm font-medium text-gray-700">
//             Local body
//           </label>
//           <div className="mt-1">
//             <select
//               id="local-body"
//               name="local-body"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               <option value="">Select LocalBody List</option>

//               {localBodyNames.map((localbody, index) => (
//                 <option key={index} value={localbody}>{localbody}</option>
//               ))}


//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Submit
//           </button>
//           <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Clear
//           </button>
//         </div>
//       </div>


//       <div className="w-full flex flex-col gap-4 mt-4">
//         <div className="ml-auto flex gap-4">
//           <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//             <PrinterIcon className="w-4 h-4 " />
//             Print
//           </button>
//           <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//             <ArrowDownTrayIcon className="w-4 h-4" />
//             Export
//           </button>
//         </div>

//         <div className="w-full overflow-y-auto styleScroll pb-2">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50 ">
//               <tr>
//                 {/* <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Action
//                 </th> */}
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   File No
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Local Body Name
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Village
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Applicant Name
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   District
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Type of Application
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Proposal Type
//                 </th>

//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Development charges for land Sq.m.
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Development charges for Building per Sq.m.
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Requlation Charge for land
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Security Deposit for building
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Security Deposit for Display Board
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   IDC - CMWSSB(For sewered area only)
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   I & A Charge
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   OSR Charges
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Premium FSI Charges
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Flag Day Charge
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Caution Deposit
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Balance Scrutiny Fees
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   SD - STP
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   colSpan="3"
//                 >
//                   Shelter fee
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Total Balance (INR)
//                 </th>
//               </tr>
//               <tr>
//                 {[...Array(14)].map((_, index) => (
//                   <React.Fragment key={index}>
//                     <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                       Total fees (INR)
//                     </th>
//                     <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                       Penal Interest (INR)
//                     </th>
//                     <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
//                       Total Balance
//                     </th>
//                   </React.Fragment>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {data?.map((item, index) => {

//           return (
//                 <tr>

//                   {/* <td
//                     className="px-2 py-4 text-xs  text-blue-500 cursor-pointer "

//                   >
//                     View
//                   </td> */}

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.fileNumber}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.localBody}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.village}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.applicantName}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.district}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.typeofApplication}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.proposalType}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForLandSqmChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForLandSqmPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForLandSqmTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForBuildingPerSqmChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForBuildingPerSqmPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.developmentChargesForBuildingPerSqmTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.regulationChargeForLandChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.regulationChargeForLandPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.regulationChargeForLandTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForBuildingChallanFeeAmount)}
//                   </td>

//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForBuildingPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForBuildingTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForDisplayBoardChallanFeeAmount)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForDisplayBoardPenalInterest)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.securityDepositForDisplayBoardTotalBalance)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.idccmwssbChallanFeeAmount)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.idccmwssbPenalInterest)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.idccmwssbTotalBalance)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.iaChargeChallanFeeAmount)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.iaChargePenalInterest)}
//                   </td> 
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.iaChargeTotalBalance)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.osrChargesChallanFeeAmount)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.osrChargesPenalInterest)}
//                   </td> 
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.osrChargesTotalBalance)}
//                   </td>  
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.premiumFSIChargesChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.premiumFSIChargesPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.premiumFSIChargesTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.flagDayChargeChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.flagDayChargePenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.flagDayChargeTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.cautionDepositChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.cautionDepositPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.cautionDepositTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.balanceScrutinyFeesChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.balanceScrutinyFeesPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.balanceScrutinyFeesTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.sdstpChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.sdstpPenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.sdstpTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.shelterFeeChallanFeeAmount)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.shelterFeePenalInterest)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 text-right"

//                   >
//                     {formatAmountWithCommas(item?.shelterFeeTotalBalance)}
//                   </td>
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                    {formatAmountWithCommas(item?.budgetTotalBalance)}
//                   </td>


//                 </tr>
//           )
//               })}
//             </tbody>
//           </table>
//         </div>


//       </div>

//     </div>
//   );
// };

// export default MISLocalBody;

//--------------------------- Ram New Code 04/05/2024 -------------------------------------------

import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "../viewModal";


const Table = ({ data, pagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(pagination ? 5 : data.length);
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

      "Date": new Date(fileDetails.dateofSubmission).toLocaleDateString(),
      "File No": fileDetails.fileNumber,
      "Local Body": fileDetails.localBody,
      "Village": fileDetails.village,
      "Applicant Name": fileDetails.applicantName,      
      "District": fileDetails.district,
      "Type of Application": fileDetails.typeofApplication,
      "Proposal Type": fileDetails.proposalType,
      "Development charges for land Sq.m - Total Fees(INR)": formatAmountWithCommas(fileDetails.developmentChargesForLandSqmChallanFeeAmount),
      "Development charges for land Sq.m - Penal Interest (INR)": formatAmountWithCommas(fileDetails.developmentChargesForLandSqmPenalInterest),
      "Development charges for land Sq.m - Total Balance": formatAmountWithCommas(fileDetails.developmentChargesForLandSqmTotalBalance),                
      "Development charges for Building per Sq.m - Total Fees(INR)": formatAmountWithCommas(fileDetails.developmentChargesForBuildingPerSqmChallanFeeAmount),
      "Development charges for Building per Sq.m - Penal Interest (INR)": formatAmountWithCommas(fileDetails.developmentChargesForBuildingPerSqmPenalInterest),
      "Development charges for Building per Sq.m - Total Balance": formatAmountWithCommas(fileDetails.developmentChargesForBuildingPerSqmTotalBalance),                
      "Requlation Charge for land - Total Fees(INR)":  formatAmountWithCommas(fileDetails.regulationChargeForLandChallanFeeAmount),
      "Requlation Charge for land - Penal Interest (INR)": formatAmountWithCommas(fileDetails.regulationChargeForLandPenalInterest),
      "Requlation Charge for land - Total Balance": formatAmountWithCommas(fileDetails.regulationChargeForLandTotalBalance),                
      "Security Deposit for building - Total Fees(INR)": formatAmountWithCommas(fileDetails.securityDepositForBuildingChallanFeeAmount),
      "Security Deposit for building - Penal Interest (INR)": formatAmountWithCommas(fileDetails.securityDepositForBuildingPenalInterest),
      "Security Deposit for building - Total Balance": formatAmountWithCommas(fileDetails.securityDepositForBuildingTotalBalance),              
      "Security Deposit for Display Board - Total Fees(INR)": formatAmountWithCommas(fileDetails.securityDepositForDisplayBoardChallanFeeAmount),
      "Security Deposit for Display Board - Penal Interest(INR)": formatAmountWithCommas(fileDetails.securityDepositForDisplayBoardPenalInterest),
      "Security Deposit for Display Board - Total Balance": formatAmountWithCommas(fileDetails.securityDepositForDisplayBoardTotalBalance),                
      "IDC - CMWSSB - Total Fees(INR)": formatAmountWithCommas(fileDetails.idccmwssbChallanFeeAmount),
      "IDC - CMWSSB - Penal Interest (INR)": formatAmountWithCommas(fileDetails.idccmwssbPenalInterest),
      "IDC - CMWSSB - Total Balance": formatAmountWithCommas(fileDetails.idccmwssbTotalBalance),                
      "I & A Charge - Total Fees(INR)": formatAmountWithCommas(fileDetails.iaChargeChallanFeeAmount),
      "I & A Charge - Penal Interest(INR)": formatAmountWithCommas(fileDetails.iaChargePenalInterest),
      "I & A Charge - Total Balance": formatAmountWithCommas(fileDetails.iaChargeTotalBalance),                
      "OSR Charges - Total Fees(INR)": formatAmountWithCommas(fileDetails.osrChargesChallanFeeAmount),
      "OSR Charges - Penal Interest(INR)": formatAmountWithCommas(fileDetails.osrChargesPenalInterest),
      "OSR Charges - Total Balance": formatAmountWithCommas(fileDetails.osrChargesTotalBalance),              
      "Premium FSI Charges - Total Fees(INR)": formatAmountWithCommas(fileDetails.premiumFSIChargesChallanFeeAmount),
      "Premium FSI Charges - Penal Interest(INR)": formatAmountWithCommas(fileDetails.premiumFSIChargesPenalInterest),
      "Premium FSI Charges - Total Balance": formatAmountWithCommas(fileDetails.premiumFSIChargesTotalBalance),                
      "Flag Day Charge - Total Fees(INR)": formatAmountWithCommas(fileDetails.flagDayChargeChallanFeeAmount),
      "Flag Day Charge - Penal Interest(INR)": formatAmountWithCommas(fileDetails.flagDayChargePenalInterest),
      "Flag Day Charge - Total Balance": formatAmountWithCommas(fileDetails.flagDayChargeTotalBalance),          
      "Caution Deposit - Total Fees(INR)": formatAmountWithCommas(fileDetails.cautionDepositChallanFeeAmount),
      "Caution Deposit - Penal Interest(INR)": formatAmountWithCommas(fileDetails.cautionDepositPenalInterest),
      "Caution Deposit - Total Balance": formatAmountWithCommas(fileDetails.cautionDepositTotalBalance),                
      "Balance Scrutiny Fees - Total Fees(INR)": formatAmountWithCommas(fileDetails.balanceScrutinyFeesChallanFeeAmount),
      "Balance Scrutiny Fees - Penal Interest(INR)": formatAmountWithCommas(fileDetails.balanceScrutinyFeesPenalInterest),
      "Balance Scrutiny Fees - Total Balance": formatAmountWithCommas(fileDetails.balanceScrutinyFeesTotalBalance),                
      "SD - STP - Total Fees(INR)": formatAmountWithCommas(fileDetails.sdstpChallanFeeAmount),
      "SD - STP - Penal Interest(INR)": formatAmountWithCommas(fileDetails.sdstpPenalInterest),
      "SD - STP - Total Balance": formatAmountWithCommas(fileDetails.sdstpTotalBalance),                
      "Shelter Fee - Total Fees(INR)": formatAmountWithCommas(fileDetails.shelterFeeChallanFeeAmount),
      "Shelter Fee - Penal Interest(INR)": formatAmountWithCommas(fileDetails.shelterFeePenalInterest),
      "Shelter Fee - Total Balance": formatAmountWithCommas(fileDetails.shelterFeeTotalBalance),                
      "Total Balance (INR)": formatAmountWithCommas(fileDetails.budgetTotalBalance)     
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
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Action
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Date
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                File No
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Local Body Name
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Village
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Applicant Name
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                District
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Type of Application
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Proposal Type
              </th>

              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Development charges for land Sq.m.
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Development charges for Building per Sq.m.
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Requlation Charge for land
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Security Deposit for building
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Security Deposit for Display Board
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                IDC - CMWSSB(For sewered area only)
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                I & A Charge
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                OSR Charges
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Premium FSI Charges
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Flag Day Charge
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Caution Deposit
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Balance Scrutiny Fees
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                SD - STP
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                colSpan="3"
              >
                Shelter fee
              </th>
              <th
                className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
                rowSpan="2"
              >
                Total Balance (INR)
              </th>
            </tr>
            <tr>
              {[...Array(14)].map((_, index) => (
                <React.Fragment key={index}>
                  <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                    Total fees (INR)
                  </th>
                  <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                    Penal Interest (INR)
                  </th>
                  <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 ">
                    Total Balance
                  </th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {/* {data.map((transaction) => ( */}
            {(currentRows ? currentRows : data).map((transaction) => (
              <tr key={transaction.fileMasterID}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.dateofSubmission).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.localBody}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.village}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.applicantName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.district}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.typeofApplication}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.proposalType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForLandSqmChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForLandSqmPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForLandSqmTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForBuildingPerSqmChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForBuildingPerSqmPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.developmentChargesForBuildingPerSqmTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.regulationChargeForLandChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.regulationChargeForLandPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.regulationChargeForLandTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForBuildingChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForBuildingPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForBuildingTotalBalance)}</td>              
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForDisplayBoardChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForDisplayBoardPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.securityDepositForDisplayBoardTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.idccmwssbChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.idccmwssbPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.idccmwssbTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.iaChargeChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.iaChargePenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.iaChargeTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.osrChargesChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.osrChargesPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.osrChargesTotalBalance)}</td>              
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.premiumFSIChargesChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.premiumFSIChargesPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.premiumFSIChargesTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.flagDayChargeChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.flagDayChargePenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.flagDayChargeTotalBalance)}</td>          
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.cautionDepositChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.cautionDepositPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.cautionDepositTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balanceScrutinyFeesChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balanceScrutinyFeesPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balanceScrutinyFeesTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.sdstpChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.sdstpPenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.sdstpTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.shelterFeeChallanFeeAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.shelterFeePenalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.shelterFeeTotalBalance)}</td>                
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.budgetTotalBalance)}</td>                               
              </tr>
            ))}
          </tbody>
        </table>
        {pagination && (
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

const MISLocalBody = () => {
  const [localBodyNames, setlocalBodyNames] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch localbody names data from API
    fetch("http://localhost:5063/api/MISReport/LocalBodyNames")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of localbody names options
        setlocalBodyNames(data);
      })
      .catch((error) => {
        console.error("Error fetching Local Body Names:", error);
      });
  }, []);
  const handleSubmit = () => {

    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    const localbodyValue = document.getElementById("local-body").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue || !localbodyValue) {
      console.error("Required fields are empty.");
      return;
    }

    const url = `http://localhost:5063/api/MISReport/LocalBodyReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&localbody=${encodeURIComponent(localbodyValue)}`;

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
        console.error("Error fetching Local-Body Report:", error);
      });
  };

  return (

    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-medium ">Local Body Reports</h1>
      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <div className="w-full flex flex-col sm:flex-row gap-4 ">
          <div className="w-full sm:w-[50%]">
            <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="local-body" className="block text-sm font-medium text-gray-700">
            Local body
          </label>
          <div className="mt-1">
            <select
              id="local-body"
              name="local-body"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              <option value="">Select LocalBody List</option>

              {localBodyNames.map((localbody, index) => (
                <option key={index} value={localbody}>{localbody}</option>
              ))}


            </select>
          </div>
        </div>

        <div className=" flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      {data && <Table data={data} />}
    </div>
  )
}

export default MISLocalBody;