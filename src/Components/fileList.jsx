// import React from "react";
// import Table from "./table";
// import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";

// const FileList = () => {
//   const data=[
//     {
//       "Action": "View",
//       "File No": "RE/GR-II/09/07/009",
//       "Developer/ Applicant Name": "Karpagam",
//       "Village": "Sembarambakkam",
//       "District": "Thiruvallur",
//       "Local Body Name": "GCC",
//       "Type of Application": "Planning Permission",
//       "Proposal Type": "Layout",
//       "Total Fees (INR)": 50000,
//       "Total Penalty (INR)": 2000,
//       "Total Fees Paid (INR)": 40000,
//       "Total Penalty Paid (INR)": 0,
//       "Balance Fees (INR)": 10000,
//       "Balance Penalty (INR)": 2000,
//       "Balance to be paid(INR)": 12000
//     },
//     {
//       "Action": "View",
//       "File No": "RE/GR-II/09/07/019",
//       "Developer/ Applicant Name": "DUGAR HOUSING LIMITED",
//       "Village": "Ramapuram",
//       "District": "Chennai",
//       "Local Body Name": "Aminjikarai",
//       "Type of Application": "Completion Certificate",
//       "Proposal Type": "Site Approva;",
//       "Total Fees (INR)": 12300,
//       "Total Penalty (INR)": 0,
//       "Total Fees Paid (INR)": 12300,
//       "Total Penalty Paid (INR)": 0,
//       "Balance Fees (INR)": 0,
//       "Balance Penalty (INR)": 0,
//       "Balance to be paid(INR)": 0
//     },
//     {
//       "Action": "View",
//       "File No": "RE/GR-II/09/07/109",
//       "Developer/ Applicant Name": "Kushee",
//       "Village": "Mundram Kattalai",
//       "District": "Kancheepuram",
//       "Local Body Name": "Tiruvottiyur",
//       "Type of Application": "Planning Clearance",
//       "Proposal Type": "Reclassification",
//       "Total Fees (INR)": 6000,
//       "Total Penalty (INR)": 0,
//       "Total Fees Paid (INR)": 4000,
//       "Total Penalty Paid (INR)": 0,
//       "Balance Fees (INR)": 2000,
//       "Balance Penalty (INR)": 0,
//       "Balance to be paid(INR)": 2000
//     },
//     {
//       "Action": "View",
//       "File No": "RE/GR-II/09/07/213",
//       "Developer/ Applicant Name": "Karpagam",
//       "Village": "Hasthinapuram",
//       "District": "Chengalpattu",
//       "Local Body Name": "Guindy",
//       "Type of Application": "Completion Certificate",
//       "Proposal Type": "Building",
//       "Total Fees (INR)": 12200,
//       "Total Penalty (INR)": 500,
//       "Total Fees Paid (INR)": 12200,
//       "Total Penalty Paid (INR)": 500,
//       "Balance Fees (INR)": 0,
//       "Balance Penalty (INR)": 0,
//       "Balance to be paid(INR)": 0
//     },
//     {
//       "Action": "View",
//       "File No": "RE/GR-II/09/07/029",
//       "Developer/ Applicant Name": "Indian Builders",
//       "Village": "Thiruneermalai",
//       "District": "Chengalpattu",
//       "Local Body Name": "Sholinganallur",
//       "Type of Application": "Planning Clearance",
//       "Proposal Type": "Sub Devision",
//       "Total Fees (INR)": 43000,
//       "Total Penalty (INR)": 5000,
//       "Total Fees Paid (INR)": 43000,
//       "Total Penalty Paid (INR)": 5000,
//       "Balance Fees (INR)": 0,
//       "Balance Penalty (INR)": 0,
//       "Balance to be paid(INR)": 0
//     }
//   ]


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

// const totalData = [
//   "Total",
//   123500,
//   7500,
//   111500,
//   5500,
//   12000,
//   2000,
//   14000
// ];

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">File List</h1>

//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <p>File Submission Date</p>
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

//         <div className=" flex gap-4">
//           <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Submit
//           </button>
//           <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Clear
//           </button>
//         </div>
//       </div>
//       <div className="w-full flex flex-col gap-4 mt-4">
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
//     <table className="w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               {Object.keys(data[0]).map((key, index) => (
//                 <th
//                   key={index}
//                   className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {key}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className=" divide-y divide-gray-200">
//             {data.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {Object.entries(item).map(([key, value], cellIndex) => (
//                   <td
//                     key={cellIndex}
//                     className={`px-2 py-4 text-xs ${
//                       value === "View"
//                         ? "text-blue-500 cursor-pointer "
//                         : "text-gray-900 "
//                     } ${!isNaN(value) ? "text-right" : ""}`}


//                   >
//                     {!isNaN(value) ? formatAmountWithCommas(value) : value}
//                   </td>

//                 ))}

//               </tr>

//             ))}
//             <tr>  
//                 <td colSpan={7}></td>

//                 {totalData?.map((item,index)=>{

//                 return <td key={index}    className={`px-2 py-4 text-xs  ${!isNaN(item) ? "text-right" : ""}`}>{!isNaN(item) ? formatAmountWithCommas(item) : item}</td>
//                })}</tr>
//           </tbody>
//         </table>
//     </div>


//     </div>
//     </div>
//   );
// };

// export default FileList;


//------------------------------------------- New Code Ram ------------------------------------------------

import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "./viewModal";
import { Environment } from "../Environment";

const Table = ({ data, pagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(pagination ? 5 : data.length);
  const [showModal, setShowModal] = useState(false)
  const [singleData, setSingleData] = useState(null)

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

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
      "Developer/ Applicant Name": fileDetails.applicantName,
      "Village": fileDetails.village,
      "District": fileDetails.district,
      "Local Body": fileDetails.localBody,
      "Type of Application": fileDetails.typeofApplication,
      "Proposal Type": fileDetails.proposalType,
      "Total Fees(INR)": formatAmountWithCommas(fileDetails.totalFees),
      "Total Penalty(INR)": formatAmountWithCommas(fileDetails.totalPenalty),
      "Total Fees Paid(INR)": formatAmountWithCommas(fileDetails.totalFeesPaid),
      "Total Penalty Paid(INR)": formatAmountWithCommas(fileDetails.totalPenaltyPaid),
      "Balance Fees(INR)": formatAmountWithCommas(fileDetails.balanceFees),
      "Balance Penalty(INR)": formatAmountWithCommas(fileDetails.balancePenalty),
      "Balance To Be Paid(INR)": formatAmountWithCommas(fileDetails.balanceToBePaid)
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
                File No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Developer/ Applicant Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Village
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                District
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Local Body Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type Of Application
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Proposal Type
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Fees(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Penalty(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Fees Paid(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Penalty Paid(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance Fees(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance Penalty(INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance To Be Paid(INR)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">

            {data?.fileLists?.map((transaction) => (
              <tr key={transaction.fileNumber}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.dateofSubmission).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.applicantName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.village}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.district}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.localBody}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.typeofApplication}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.proposalType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalFees)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalPenalty)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalFeesPaid)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalPenaltyPaid)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balanceFees)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balancePenalty)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.balanceToBePaid)}</td>
              </tr>
            ))}

            <tr>
              <td colSpan={8}></td> 
              <td className="px-6 py-4 whitespace-nowrap ">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalFees)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalPenalty)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalFeesPaid)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalPenaltyPaid)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallBalanceFees)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallBalancePenalty)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallBalanceToBePaid)}</td>
            </tr>

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

const FileList = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [data, setData] = useState([]);

  const handleSubmit = () => {

    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue) {
      console.error("Required fields are empty.");
      return;
    }

    // const url = `http://localhost:5063/api/MISReport/FileList?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}`;
    const url = `${Environment.apiBaseUrl}/api/MISReport/FileLists?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}`;

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
        console.error("Error fetching Header-Wise Report:", error);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">File List</h1>

      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <p>File Submission Date</p>
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
      {data && <Table data={data} pagination={false} />}
    </div>
  );
};

export default FileList;
