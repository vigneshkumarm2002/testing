// import React from "react";
// import Table from "./table";

// const ApplicantReport = () => {
//   const data = [
//     {
//       Action: "View",
//       Date: "08-03-2024",
//       District: "Chennai",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/0091",
//       "Transaction id": "CMDA_160981",
//       Zone: "Municipality",
//       "Challan Amount": 3724,
//       "Penalty Amount": 0,
//       "Total Amount": 3724,
//       "Payment Status": "Paid",
//       Gateway: "HDFC",
//       "Total Challan Amount": 30000,
//       "Total Paid Challan Amount": 15500,
//       "Total Balance Amount": 14500,
//       "Payment Mode": "Credit Card",
//     },
//     {
//       Action: "View",
//       Date: "08-03-2024",
//       District: "Chennai",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_160992",
//       Zone: "Municipality",
//       "Challan Amount": 4250,
//       "Penalty Amount": 50,
//       "Total Amount": 4500,
//       "Payment Status": "Failed",
//       Gateway: "HDFC",
//       "Total Challan Amount": 25000,
//       "Total Paid Challan Amount": 12500,
//       "Total Balance Amount": 12500,
//       "Payment Mode": "Debit Card",
//     },
//     {
//       Action: "View",
//       Date: "08-03-2024",
//       District: "Chennai",
//       "Budget Header": "Registration Charge",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0008/2024",
//       "File No": "RE/GR-II/09/07/1091",
//       "Transaction id": "CMDA_161003",
//       Zone: "Municipality",
//       "Challan Amount": 2856,
//       "Penalty Amount": 0,
//       "Total Amount": 2856,
//       "Payment Status": "Paid",
//       Gateway: "HDFC",
//       "Total Challan Amount": 20000,
//       "Total Paid Challan Amount": 10000,
//       "Total Balance Amount": 10000,
//       "Payment Mode": "Credit Card",
//     },
//     {
//       Action: "View",
//       Date: "08-03-2024",
//       District: "Chennai",
//       "Budget Header": "Development Charge",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/2131",
//       "Transaction id": "CMDA_161014",
//       Zone: "Municipality",
//       "Challan Amount": 7000,
//       "Penalty Amount": 800,
//       "Total Amount": 7800,
//       "Payment Status": "Failed",
//       Gateway: "HDFC",
//       "Total Challan Amount": 50000,
//       "Total Paid Challan Amount": 37000,
//       "Total Balance Amount": 13000,
//       "Payment Mode": "Net Banking",
//     },
//     {
//       Action: "View",
//       Date: "08-03-2024",
//       District: "Chennai",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/0291",
//       "Transaction id": "CMDA_161085",
//       Zone: "Municipality",
//       "Challan Amount": 3750,
//       "Penalty Amount": 465,
//       "Total Amount": 4215,
//       "Payment Status": "Paid",
//       Gateway: "HDFC",
//       "Total Challan Amount": 42500,
//       "Total Paid Challan Amount": 10000,
//       "Total Balance Amount": 32500,
//       "Payment Mode": "Debit Card",
//     },
//   ];

//   const dropDown = [
//     { name: "Dugar Housing Limited", value: "dugar housing limited" },
//     { name: "Karpagam", value: "karpagam" },
//     { name: "Indian Builders", value: "indian builders" },
//     { name: "Kushee", value: "kushee" },
//   ];

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-xl font-medium ">Applicant Reports</h1>
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
//             htmlFor="headerwise"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Applicant
//           </label>
//           <div className="mt-1">
//             <select
//               id="headerwise"
//               name="headerwise"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               {dropDown?.map((item, index) => (
//                 <option
//                   key={index}
//                   value={item.value}
//                   className="whitespace-normal"
//                 >
//                   {item.name}{" "}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button className="bg-[#0066FF] text-sm  text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Submit
//           </button>
//           <button className="bg-white shadow-sm border text-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Clear
//           </button>
//         </div>
//       </div>
//       <Table data={data} />


//     </div>
//   );
// };

// export default ApplicantReport;

//--------------------------------- Ram New Code - 18/04/2024 ------------------------------


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
    //const budgetHeaderNames = fileDetails.budgetHeaderNames.map(item => item.budgetHeader).join(', ');                  //Ram Needtocheck
    const budgetHeaderNames = fileDetails.budgetHeaderNames.map((item, index) => (                              //Table format
      <h1 className={`border px-2 py-1 border-gray-200 rounded-md ${index !== 0 && "mt-2"}`}>
        <div>
          {item.budgetHeader}
        </div>
        <div>
          Challan Fee : {formatAmountWithCommas(item.challanFee)}
        </div>
        <div>
          Penal Interest : {formatAmountWithCommas(item.penalInterest)}
        </div>
      </h1>
    ));
    const data = {

      "Date": new Date(fileDetails.transactionDate).toLocaleDateString(),
      "District": fileDetails.district,
      "Applicant Name": fileDetails.customerName,
      "Challan No": fileDetails.challanNumber,
      "File No": fileDetails.fileNumber,
      "Transaction id": fileDetails.cmdaOrderId,
      "Zone": fileDetails.zone,
      // "Budget Header": fileDetails.budgetHeaderNames,
      "Budget Header": budgetHeaderNames,
      "Challan Amount (INR)": formatAmountWithCommas(fileDetails.transactionAmount),
      "Payment Status": fileDetails.status === 2 ? 'Paid' : 'Notpaid',
      "Gateway": fileDetails.gatewayName,
      "Payment Mode": "Credit Card"                  //Doubt Ram - Need to check

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
                District
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicant Name
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
                Zone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Challan Amount (INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gateway
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {/* {data.map((transaction) => ( */}
            {(currentRows ? currentRows : data).map((transaction) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.district}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.zone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.transactionAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'NotPaid'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.gatewayName}</td>
                {/* //Doubt Ram - Need to check */}
                <td className="px-6 py-4 whitespace-nowrap">Credit Card</td>

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


const ApplicantReport = () => {
  const [applicantNames, setapplicantNames] = useState([]);
  const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch applicant names data from API
    //fetch("http://localhost:5063/api/GateWayReport/ApplicantNames")
    fetch(`${Environment.apiBaseUrl}/api/GateWayReport/ApplicantNames`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of district names options
        setapplicantNames(data);
      })
      .catch((error) => {
        console.error("Error fetching Applicant Names:", error);
      });
  }, []);

  const handleSubmit = () => {

    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    const applicantValue = document.getElementById("applicantname").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue || !applicantValue) {
      console.error("Required fields are empty.");
      return;
    }

    const url = `${Environment.apiBaseUrl}/api/GateWayReport/ApplicantReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&applicantName=${encodeURIComponent(applicantValue)}`;

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
        console.error("Error fetching Applicant-Name Report:", error);
      });
  };

  // const handleClear = () => {                        //need to check
  //   debugger
  //   // Clear input fields
  //   document.getElementById("from-date").value = "";
  //   document.getElementById("to-date").value = "";
  //   document.getElementById("applicantname").value = "";
  //   // Clear data
  //   setData([]);
  // };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">Applicant Reports</h1>
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
            htmlFor="applicantname"
            className="block text-sm font-medium text-gray-700"
          >
            Applicant
          </label>
          <div className="mt-1">
            <select
              id="applicantname"
              name="applicantname"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              <option value="">Select ApplicantName</option>

              {applicantNames.map((applicant, index) => (
                <option key={index} value={applicant}>{applicant}</option>
              ))}
            </select>
          </div>
        </div>

        <div className=" flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-[#0066FF] text-sm  text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button 
            // onClick={handleClear}
            className="bg-white shadow-sm border text-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      {data && <Table data={data} />}


    </div>
  );
};

export default ApplicantReport;
