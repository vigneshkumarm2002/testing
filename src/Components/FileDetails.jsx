// import React from "react";
// import Table from "./table";

// const FileDetails = () => {

//   const budgetData=[
//     {
//       "Budget Header": "Development charges for land Sq.m.",
//       "Total Fees (INR)": 3000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 3000.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Development charges for Building per Sq.m.",
//       "Total Fees (INR)": 14000.00,
//       "Total Penalty (INR)": 1000.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 14000.00,
//       "Balance Penalty (INR)": 1000.00,
//       "Total Balance (INR)": 15000.00
//     },
//     {
//       "Budget Header": "Requlation Charge for land",
//       "Total Fees (INR)": 53000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 53000.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Security Deposit for building",
//       "Total Fees (INR)": 256000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 256000.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 256000.00
//     },
//     {
//       "Budget Header": "Security Deposit for Display Board",
//       "Total Fees (INR)": 10000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 10000.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 10000.00
//     },
//     {
//       "Budget Header": "IDC - CMWSSB(For sewered area only)",
//       "Total Fees (INR)": 297000.00,
//       "Total Penalty (INR)": 10000.00,
//       "Total Fees Paid (INR)": 297000.00,
//       "Total Penalty Paid (INR)": 10000.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "I & A Charge",
//       "Total Fees (INR)": 390000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 390000.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "OSR Charges",
//       "Total Fees (INR)": 0.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Premium FSI Charges",
//       "Total Fees (INR)": 0.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Flag Day Charge",
//       "Total Fees (INR)": 500.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 500.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Caution Deposit",
//       "Total Fees (INR)": 0.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Balance Scrutiny Fees",
//       "Total Fees (INR)": 2000.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 2000.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 2000.00
//     },
//     {
//       "Budget Header": "SD - STP",
//       "Total Fees (INR)": 0.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Shelter fee",
//       "Total Fees (INR)": 0.00,
//       "Total Penalty (INR)": 0.00,
//       "Total Fees Paid (INR)": 0.00,
//       "Total Penalty Paid (INR)": 0.00,
//       "Balance Fees (INR)": 0.00,
//       "Balance Penalty (INR)": 0.00,
//       "Total Balance (INR)": 0.00
//     },
//     {
//       "Budget Header": "Total",
//       "Total Fees (INR)": 1025500.00,
//       "Total Penalty (INR)": 11000.00,
//       "Total Fees Paid (INR)": 753500.00,
//       "Total Penalty Paid (INR)": 10000.00,
//       "Balance Fees (INR)": 272000.00,
//       "Balance Penalty (INR)": 1000.00,
//       "Total Balance (INR)": 283000.00
//     }
//   ]


//         const data = {
//             "Developer Applicant Name": "Kushee",
//             "File Number": "TEMP/CMDA/1311/2022",
//             "Date of Submission": "28-06-2023",
//             "Site Address": "11, Bheema Nagar",
//            "District": "Chennai",
//             "Taluk": "Ambattur",
//             "Village": "Athipattu (GCC LB)",
//             "Local Body Name": "GCC",
//             "Type of Application": "Planning Permission",
//             "Proposal Type": "Building",
//            "Type of Building": "NHRB"
//           };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">FileDetails</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto  px-4  pt-4 pb-6 rounded-md  flex flex-col sm:flex-row  gap-4 self-baseline">
//         <div className="w-full sm:w-[250px]">
//           <label
//             htmlFor="file-number"
//             className="block text-sm font-medium text-gray-700"
//           >
//             File Number
//           </label>
//           <div className="mt-1">
//             <input
//               type="text"
//               id="file-number"
//               name="file-number"
//               placeholder="TEMP/CMDA/0224/2023"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             />
//           </div>
//         </div>

//         <div className=" self-center sm:self-end">
//           <button className="bg-[#0066FF] h-fit  text-white font-medium shadow-sm py-1.5 px-4 rounded">
//           Get Data
//           </button>
//         </div>
//       </div>

//       <table className="mx-auto w-full sm:w-[600px] pb-4">
//       <tbody className="bg-white divide-y divide-gray-200">
//         {Object.entries(data).map(([key, value]) => (
//           <tr key={key}>
//             <td className="px-2 py-4 text-xs text-gray-900">{key}</td>
//             <td className="px-2 py-4 text-xs text-gray-900">{value}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//       <Table data={budgetData} pagination={false} alignedRight={"0"}/>
//     </div>
//   );
// };

// export default FileDetails;

//----------------------------------- NEW CODE RAM - 23/04/2024 -----------------------------------------

/* Another Method */

// import React, { useState } from "react";
// import Table from "./table";

// const FileDetails = () => {
//   const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   const handleSubmit = () => {
//     const fileNumberElement = document.getElementById("file-number");
//     if (fileNumberElement) {
//       const fileNumber = fileNumberElement.value;

//       // Check if fileNumber is provided
//       if (!fileNumber) {
//         setError(new Error("Please enter a file number"));
//         return;
//       }

//       // Clear previous data
//       setData([]);
//       setError(null);

//       const url = `http://localhost:5063/api/MISReport/FileDetails?fileNumber=${encodeURIComponent(fileNumber)}`;
//       fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           return response.json();
//         })
//         .then((apiResponse) => {
//           //debugger
//           if (apiResponse.message && apiResponse.message !== "") {
//             throw new Error(apiResponse.message); // Throw an error with the message from the response
//         }
//           // Bind API response to the data object
//           const dateOfSubmission = apiResponse.dateofSubmission ? new Date(apiResponse.dateofSubmission).toLocaleDateString() : '';
//           setData({
//             "Developer Applicant Name": apiResponse.applicantName,
//             "File Number": apiResponse.fileNumber,
//             "Date of Submission": dateOfSubmission,
//             "Site Address": apiResponse.siteAddress,
//             "District": apiResponse.district,
//             "Taluk": apiResponse.taluk,
//             "Village": apiResponse.village,
//             "Local Body Name": apiResponse.localBody,
//             "Type of Application": apiResponse.typeofApplication,
//             "Proposal Type": apiResponse.proposalType,
//             "Type of Building": apiResponse.typeofBuilding,
//           });
//           setApiResponse(apiResponse); // Update apiResponse state
//         })
//         .catch((error) => {
//           console.error("Error fetching File Details:", error);
//           setError(error); // Update error state if fetch fails
//         });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">FileDetails</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto  px-4  pt-4 pb-6 rounded-md  flex flex-col sm:flex-row  gap-4 self-baseline">
//         <div className="w-full sm:w-[250px]">
//           <label
//             htmlFor="file-number"
//             className="block text-sm font-medium text-gray-700"
//           >
//             File Number
//           </label>
//           <div className="mt-1">
//             <input
//               type="text"
//               id="file-number"
//               name="file-number"
//               placeholder="TEMP/CMDA/0224/2023"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             />
//           </div>
//         </div>

//         <div className=" self-center sm:self-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#0066FF] h-fit  text-white font-medium shadow-sm py-1.5 px-4 rounded"
//           >
//             Get Data
//           </button>
//         </div>
//       </div>

//       {error && <div className="text-red-500">{error.message}</div>}

//       {data && Object.keys(data).length > 0 && (
//         <table className="mx-auto w-full sm:w-[600px] pb-4">
//           <tbody className="bg-white divide-y divide-gray-200">
//             {Object.entries(data).map(([key, value]) => (
//               <tr key={key}>
//                 <td className="px-2 py-4 text-xs text-gray-900">{key}</td>
//                 <td className="px-2 py-4 text-xs text-gray-900">{value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//     </div>
//   );
// };

// export default FileDetails;

//------------------------------------------------------------------
/* Another Method */
import React, { useState } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";

const FileDetails = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [challanHeaders, setChallanHeaders] = useState([]);
  const [showGrid, setShowGrid] = useState(true);

  const handleSubmit = () => {
    const fileNumberElement = document.getElementById("file-number");
    if (fileNumberElement) {
      const fileNumber = fileNumberElement.value;

      if (!fileNumber) {
        setError(new Error("Please enter a file number"));
        return;
      }

      setData([]);
      setError(null);

      // const url = `http://localhost:5063/api/MISReport/FileDetails?fileNumber=${encodeURIComponent(fileNumber)}`;
      const url = `http://localhost:5063/api/MISReport/FileDetailsList?fileNumber=${encodeURIComponent(fileNumber)}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((apiResponse) => {
          if (apiResponse.message && apiResponse.message !== "") {
            throw new Error(apiResponse.message);
            setShowGrid(false);
          }
          const dateOfSubmission = apiResponse.dateofSubmission ? new Date(apiResponse.dateofSubmission).toLocaleDateString() : '';
          setData({
            "Developer Applicant Name": apiResponse.applicantName,
            "File Number": apiResponse.fileNumber,
            "Date of Submission": dateOfSubmission,
            "Site Address": apiResponse.siteAddress,
            "District": apiResponse.district,
            "Taluk": apiResponse.taluk,
            "Village": apiResponse.village,
            "Local Body Name": apiResponse.localBody,
            "Type of Application": apiResponse.typeofApplication,
            "Proposal Type": apiResponse.proposalType,
            "Type of Building": apiResponse.typeofBuilding,
          });
          setApiResponse(apiResponse);
          setChallanHeaders(apiResponse.challanHeaders || []);
          setShowGrid(true);
        })
        .catch((error) => {
          console.error("Error fetching File Details:", error);
          setError(error);
          setShowGrid(false);
        });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">FileDetails</h1>
      <div className="w-full md:w-[500px] text-left mx-auto  px-4  pt-4 pb-6 rounded-md  flex flex-col sm:flex-row  gap-4 self-baseline">
        <div className="w-full sm:w-[250px]">
          <label
            htmlFor="file-number"
            className="block text-sm font-medium text-gray-700"
          >
            File Number
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="file-number"
              name="file-number"
              placeholder="TEMP/CMDA/0224/2023"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            />
          </div>
        </div>

        <div className=" self-center sm:self-end">
          <button
            onClick={handleSubmit}
            className="bg-[#0066FF] h-fit  text-white font-medium shadow-sm py-1.5 px-4 rounded"
          >
            Get Data
          </button>
        </div>
      </div>

      {error && <div className="text-red-500">{error.message}</div>}

      <div className="overflow-x-auto">
        {data && Object.keys(data).length > 0 && (
          <table className="mx-auto w-full sm:w-[600px] pb-4">
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-2 py-4 text-xs text-gray-900">{key}</td>
                  <td className="px-2 py-4 text-xs text-gray-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

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

      <div className="overflow-x-auto">
        {challanHeaders && challanHeaders.length > 0 && (
          <table className="mx-auto w-full sm:w-[600px] pb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget Header</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL FEES (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL PENALTY (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL FEES PAID (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL PENALTY PAID (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BALANCE FEES (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BALANCE PENALTY (INR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL BALANCE (INR)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-xs">
              {challanHeaders.map((challan) => (
                <tr key={challan.challanNumber}>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.budgetHead}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.totalChallanFeeAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.totalPenalInterest}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.challanFeeAmountPaid}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.penalInterestPaid}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.balanceChallanFeeAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.balancePenalInterest}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challan.totalBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FileDetails;



//-----------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import Table from "./table"; // Make sure to import the correct path for the Table component

// const FileDetails = () => {
//   const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
//   const [error, setError] = useState(null);
//   const [tableData, setTableData] = useState([]);

//   const handleSubmit = () => {
//     const fileNumberElement = document.getElementById("file-number");
//     if (fileNumberElement) {
//       const fileNumber = fileNumberElement.value;

//       // Check if fileNumber is provided
//       if (!fileNumber) {
//         setError(new Error("Please enter a file number"));
//         return;
//       }

//       const url = `http://localhost:5063/api/MISReport/FileDetails?fileNumber=${encodeURIComponent(fileNumber)}`;
//       fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           return response.json();
//         })
//         .then((apiResponse) => {
//           setApiResponse(apiResponse);
//           setTableData([apiResponse]); // Wrap the API response in an array to match the format expected by the Table component
//         })
//         .catch((error) => {
//           console.error("Error fetching File Details:", error);
//           setError(error); // Update error state if fetch fails
//         });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium">FileDetails</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto  px-4  pt-4 pb-6 rounded-md  flex flex-col sm:flex-row  gap-4 self-baseline">
//         <div className="w-full sm:w-[250px]">
//           <label htmlFor="file-number" className="block text-sm font-medium text-gray-700">
//             File Number
//           </label>
//           <div className="mt-1">
//             <input
//               type="text"
//               id="file-number"
//               name="file-number"
//               placeholder="TEMP/CMDA/0224/2023"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             />
//           </div>
//         </div>

//         <div className="self-center sm:self-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#0066FF] h-fit  text-white font-medium shadow-sm py-1.5 px-4 rounded"
//           >
//             Get Data
//           </button>
//         </div>
//       </div>

//       {apiResponse && (
//         <table className="mx-auto w-full sm:w-[600px] pb-4">
//           <tbody className="bg-white divide-y divide-gray-200">
//             {Object.entries(apiResponse).map(([key, value]) => (
//               <tr key={key}>
//                 <td className="px-2 py-4 text-xs text-gray-900">{key}</td>
//                 <td className="px-2 py-4 text-xs text-gray-900">{value}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {tableData.length > 0 && <Table data={tableData} pagination={false} />} {/* Render the Table component with the fetched data */}
//     </div>
//   );
// };

// export default FileDetails;

//---------------------------------------------------------------------------------------------------------