// import React from 'react'
// import Table from './table'

// const HeaderwiseReport = () => {
//   const data=[
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "POTHYS GARMENTS",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/009",
//       "Transaction id": "CMDA_16098",
//       "Zone": "Panchayat Union",
//       "Project Name": "Planning Clearance for Pohys Building",
//       "Challan Amount (INR)": 3724.00,
//       "Penalty Amount (INR)": 0.00,
//       "Total Amount (INR)": 3724.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 30000.00,
//       "Total Paid Challan Amount (INR)": 15500.00,
//       "Total Balance Amount (INR)": 14500.00,
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "DUGAR HOUSING LIMITED",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_16099",
//       "Zone": "Municipality",
//       "Project Name": "DUGAR Housing",
//       "Challan Amount (INR)": 4250.00,
//       "Penalty Amount (INR)": 50.00,
//       "Total Amount (INR)": 4500.00,
//       "Payment Status": "Failed",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 25000.00,
//       "Total Paid Challan Amount (INR)": 12500.00,
//       "Total Balance Amount (INR)": 12500.00,
//       "Payment Mode": "Debit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Registration Charge",
//       "Applicant Name": "Kushee",
//       "Challan No": "CMDA/0008/2024",
//       "File No": "RE/GR-II/09/07/109",
//       "Transaction id": "CMDA_16100",
//       "Zone": "Municipality",
//       "Project Name": "Layout Refusal",
//       "Challan Amount (INR)": 2856.00,
//       "Penalty Amount (INR)": 0.00,
//       "Total Amount (INR)": 2856.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 20000.00,
//       "Total Paid Challan Amount (INR)": 10000.00,
//       "Total Balance Amount (INR)": 10000.00,
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Development Charge",
//       "Applicant Name": "Karpagam",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/213",
//       "Transaction id": "CMDA_16101",
//       "Zone": "2 Zone",
//       "Project Name": "Site Approval",
//       "Challan Amount (INR)": 7000.00,
//       "Penalty Amount (INR)": 800.00,
//       "Total Amount (INR)": 7800.00,
//       "Payment Status": "Failed",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 50000.00,
//       "Total Paid Challan Amount (INR)": 37000.00,
//       "Total Balance Amount (INR)": 13000.00,
//       "Payment Mode": "Net Banking"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "Indian Builders",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/029",
//       "Transaction id": "CMDA_16108",
//       "Zone": "Town Panchayat",
//       "Project Name": "Reclassification",
//       "Challan Amount (INR)": 3750.00,
//       "Penalty Amount (INR)": 465.00,
//       "Total Amount (INR)": 4215.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 42500.00,
//       "Total Paid Challan Amount (INR)": 10000.00,
//       "Total Balance Amount (INR)": 32500.00,
//       "Payment Mode": "Net Banking"
//     }
//   ]


// const dropDown = [
//   { name: 'Development charges for land per Sq.m.', value: 'development_charges_land' },
//   { name: 'Development charges for Building per Sq.m.', value: 'development_charges_building' },
//   { name: 'Regulation Charge for land', value: 'regulation_charge_land' },
//   { name: 'Security Deposit for building', value: 'security_deposit_building' },
//   { name: 'Security Deposit for Display Board', value: 'security_deposit_display_board' },
//   { name: 'IDC - CMWSSB(For sewered area only)', value: 'idc_cmwssb_sewered_area' },
//   { name: 'I & A Charge', value: 'i_a_charge' },
//   { name: 'OSR Charges', value: 'osr_charges' },
//   { name: 'Premium FSI Charges', value: 'premium_fsi_charges' },
//   { name: 'Flag Day Charge', value: 'flag_day_charge' },
//   { name: 'Caution Deposit', value: 'caution_deposit' },
//   { name: 'Balance Scrutiny Fees', value: 'balance_scrutiny_fees' },
//   { name: 'SD - STP', value: 'sd_stp' },
//   { name: 'Advertisement Charges', value: 'advertisement_charges' },
//   { name: 'Shelter fee', value: 'shelter_fee' }
// ];



//   return (
// <div className='flex flex-col gap-4'>
// <h1 className="text-xl font-medium ">Headerwise Reports</h1>
// <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//       <div className="w-full flex flex-col sm:flex-row gap-4 ">
//         <div className="w-full sm:w-[50%]">
//           <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
//             From Date
//           </label>
//           <div className="mt-1">
//             <input
//               type="date"
//               id="from-date"
//               name="from-date"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             />
//           </div>
//         </div>
//         <div className="w-full sm:w-[50%]">
//           <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
//             To Date
//           </label>
//           <div className="mt-1">
//             <input
//               type="date"
//               id="to-date"
//               name="to-date"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
//          Header
//         </label>
//         <div className="mt-1">
//           <select
//             id="headerwise"
//             name="headerwise"
//             className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//           >

//             {dropDown?.map((item, index) => (
//   <option key={index} value={item.value} className='whitespace-normal'>{item.name} </option>
// ))}

//           </select>
//         </div>
//       </div>

//       <div className=" flex gap-4">
//         <button className="bg-[#0066FF] text-sm  text-white font-medium shadow-sm py-1.5 px-4 rounded">
//           Submit
//         </button>
//         <button className="bg-white shadow-sm border text-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//           Clear
//         </button>
//       </div>
//     </div>
//     <Table data={data} />
//     </div>
//   )
// }

// export default HeaderwiseReport



// -----------------------------------------New Code Api Implementation ---------------------------------------------


// import React, { useState, useEffect } from "react";
// import Table from './table'

// const HeaderwiseReport = () => {
//   const [headerNames, setheaderNames] = useState([]);
//   const data = [
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "POTHYS GARMENTS",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/009",
//       "Transaction id": "CMDA_16098",
//       "Zone": "Panchayat Union",
//       "Project Name": "Planning Clearance for Pohys Building",
//       "Challan Amount (INR)": 3724.00,
//       "Penalty Amount (INR)": 0.00,
//       "Total Amount (INR)": 3724.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 30000.00,
//       "Total Paid Challan Amount (INR)": 15500.00,
//       "Total Balance Amount (INR)": 14500.00,
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "DUGAR HOUSING LIMITED",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_16099",
//       "Zone": "Municipality",
//       "Project Name": "DUGAR Housing",
//       "Challan Amount (INR)": 4250.00,
//       "Penalty Amount (INR)": 50.00,
//       "Total Amount (INR)": 4500.00,
//       "Payment Status": "Failed",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 25000.00,
//       "Total Paid Challan Amount (INR)": 12500.00,
//       "Total Balance Amount (INR)": 12500.00,
//       "Payment Mode": "Debit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Registration Charge",
//       "Applicant Name": "Kushee",
//       "Challan No": "CMDA/0008/2024",
//       "File No": "RE/GR-II/09/07/109",
//       "Transaction id": "CMDA_16100",
//       "Zone": "Municipality",
//       "Project Name": "Layout Refusal",
//       "Challan Amount (INR)": 2856.00,
//       "Penalty Amount (INR)": 0.00,
//       "Total Amount (INR)": 2856.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 20000.00,
//       "Total Paid Challan Amount (INR)": 10000.00,
//       "Total Balance Amount (INR)": 10000.00,
//       "Payment Mode": "Credit Card"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Development Charge",
//       "Applicant Name": "Karpagam",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/213",
//       "Transaction id": "CMDA_16101",
//       "Zone": "2 Zone",
//       "Project Name": "Site Approval",
//       "Challan Amount (INR)": 7000.00,
//       "Penalty Amount (INR)": 800.00,
//       "Total Amount (INR)": 7800.00,
//       "Payment Status": "Failed",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 50000.00,
//       "Total Paid Challan Amount (INR)": 37000.00,
//       "Total Balance Amount (INR)": 13000.00,
//       "Payment Mode": "Net Banking"
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Advertisement Charge",
//       "Applicant Name": "Indian Builders",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/029",
//       "Transaction id": "CMDA_16108",
//       "Zone": "Town Panchayat",
//       "Project Name": "Reclassification",
//       "Challan Amount (INR)": 3750.00,
//       "Penalty Amount (INR)": 465.00,
//       "Total Amount (INR)": 4215.00,
//       "Payment Status": "Paid",
//       "Gateway": "HDFC",
//       "Total Challan Amount (INR)": 42500.00,
//       "Total Paid Challan Amount (INR)": 10000.00,
//       "Total Balance Amount (INR)": 32500.00,
//       "Payment Mode": "Net Banking"
//     }
//   ];
//   useEffect(() => {
//     // Fetch header names data from API
//     fetch("http://localhost:5063/api/GateWayReport/HeaderNames")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming data is an array of header names options
//         setheaderNames(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching header names:", error);
//       });
//   }, []);


//   return (
//     <div className='flex flex-col gap-4'>
//       <h1 className="text-xl font-medium ">Headerwise Reports</h1>
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
//           <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
//             Header
//           </label>
//           <div className="mt-1">
//             <select
//               id="headerwise"
//               name="headerwise"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >

//               <option value="">Select HeaderList</option>

//               {headerNames.map((headers, index) => (
//                 <option key={index} value={headers}>{headers}</option>
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
//   )
// }

// export default HeaderwiseReport



//--------------------------------------------- Ram 16/04/2024 ------------------------------------------------


import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "./viewModal";


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

      "Date": new Date(fileDetails.transactionDate).toLocaleDateString(),
      "Budget Header": fileDetails.budgetHeader,
      "Applicant Name": fileDetails.customerName,
      "Challan No": fileDetails.challanNumber,
      "File No": fileDetails.fileNumber,
      "Transaction id": fileDetails.cmdaOrderId,
      "Amount (INR)": formatAmountWithCommas(fileDetails.transactionAmount),
      "Payment Status": fileDetails.status === 2 ? 'Paid' : 'Notpaid',
      "Payment Mode": "Credit Card",                      //Doubt Ram - Need to check
      "Challan Fee": formatAmountWithCommas(fileDetails.challanFee),
      "Penal Interest": formatAmountWithCommas(fileDetails.penalInterest)
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
                Budget Header
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
                Amount (INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Challan Fee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Penal Interest
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {data.map((transaction) => (
              <tr key={transaction.transactionId}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.budgetHeader}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.cmdaOrderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.transactionAmount)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.status === 2 ? 'Paid' : 'NotPaid'}</td>
                {/* //Doubt Ram - Need to check */}
                <td className="px-6 py-4 whitespace-nowrap">Credit Card</td> 
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.challanFee)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.penalInterest)}</td>
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




const HeaderwiseReport = () => {
  const [headerNames, setheaderNames] = useState([]);
  const [apiResponse, setApiResponse] = useState(null); // State variable to store API response
  const [data, setData] = useState([]);
  // const [selectedFromDate, setSelectedFromDate] = useState('');
  // const [selectedToDate, setSelectedToDate] = useState('');
  // const [selectedHeaders, setSelectedHeaders] = useState('');
  
  useEffect(() => {
    // Fetch header names data from API
    fetch("http://localhost:5063/api/GateWayReport/HeaderNames")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of header names options
        setheaderNames(data);
      })
      .catch((error) => {
        console.error("Error fetching header names:", error);
      });
  }, []);

  const handleSubmit = () => {
    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    const headersValue = document.getElementById("headerwise").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue || !headersValue) {
      console.error("Required fields are empty.");
      return;
    }

    const url = `http://localhost:5063/api/GateWayReport/HeaderReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&headers=${encodeURIComponent(headersValue)}`;

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

  // const handleClear = () => {
  //   console.log("Clear button clicked");
  //   setSelectedFromDate('');
  //   setSelectedToDate('');
  //   setSelectedHeaders('');
  // };


  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-medium ">Headerwise Reports</h1>
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
          <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
            Header
          </label>
          <div className="mt-1">
            <select
              id="headerwise"
              name="headerwise"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >

              <option value="">Select HeaderList</option>

              {headerNames.map((headers, index) => (
                <option key={index} value={headers}>{headers}</option>
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
          {/* <button
            onClick={handleClear}
            className="bg-white border text-sm border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
          >
            Clear
          </button> */}
        </div>
      </div> 
      {/* Display API response data */}
      {data && <Table data={data}  />}
    </div>
  )
}

export default HeaderwiseReport







