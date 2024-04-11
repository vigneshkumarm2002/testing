// import React, { useState } from 'react'

// const UserAccessRights = () => {
//   const [checkedItems, setCheckedItems] = useState({});

//   const navigationLinks = [
//     { name: "User Master" },
//     {
//       name: "User Access Rights",
 
//     },
  
//     { name: "Change Password"},
//   ];

//   const Gateway = [
//     { name: "Transaction" },
//     {
//       name: "Header",
 
//     },
//     {
//       name: "Local Body",

//     },
//     {
//       name: "District",
//     },
//     {
//       name: "Applicant",
//     },
//   ]

//   const MIS = [
//     { name: "Transaction" },
//     {
//       name: "Header",
 
//     },
//     {
//       name: "Local Body",

//     },
//     {
//       name: "District",
//     },
//     {
//       name: "Applicant",
//     },
//     {
//       name: "File List",
//     },
//     {
//       name: "File Details",
//     },
//   ]

//   const handleCheckboxChange = (event) => {
//     setCheckedItems({
//       ...checkedItems,
//       [event.target.name]: event.target.checked,
//     });
//   };
//   return (
//     <>
//     <h1 className="text-xl font-medium  pb-4">User Access Rights</h1>
//     <div className="w-full md:w-[500px] sm:mx-auto text-left mb-4 border border-gray-300 px-6 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">

//         <div>
//           <label
//             htmlFor="users"
//             className="block text-sm font-medium text-gray-700"
//           >
//          Users
//           </label>
//           <div className="mt-1">
//             <select
//               id="users"
//               name="users"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               <option value="">Select User</option>
//               <option value="option1">User1</option>
//               <option value="option2">User2</option>
//               <option value="option3">User3</option>
//               {/* Add more dummy options as needed */}
//             </select>
//           </div>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>Select menu</p>
//       {navigationLinks?.map((link, index) => (
//         <div key={index} className="flex items-center">
//           <input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             name={link.name}
//             checked={checkedItems[link.name] || false}
//             onChange={handleCheckboxChange}
//             className="mr-2 outline-none ring-none shadow-none"
//           />
//           <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//             {link.name}
//           </label>
//         </div>
//       ))}
//     </div>
//     <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>Gatewaywise reports</p>
//       {Gateway.map((link, index) => (
//         <div key={index} className="flex items-center">
//           <input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             name={link.name}
//             checked={checkedItems[link.name] || false}
//             onChange={handleCheckboxChange}
//             className="mr-2 outline-none ring-none shadow-none"
//           />
//           <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//             {link.name}
//           </label>
//         </div>
//       ))}
//     </div>
//     <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>MIS reports</p>
//       {MIS?.map((link, index) => (
//         <div key={index} className="flex items-center">
//           <input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             name={link.name}
//             checked={checkedItems[link.name] || false}
//             onChange={handleCheckboxChange}
//             className="mr-2 outline-none ring-none shadow-none"
//           />
//           <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//             {link.name}
//           </label>
//         </div>
//       ))}
//     </div>

//         <div className=" flex gap-4">
//           <button className="bg-[#0066FF]  text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Save
//           </button>
//           <button onClick={()=>setCheckedItems({})} className="bg-white border border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Cancel
//           </button>
//         </div>
//       </div>
//       </>
//   )
// }

// export default UserAccessRights

import React, { useState, useEffect } from 'react';

const UserAccessRights = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [users, setUsers] = useState([]); // State to store users
  useEffect(() => {
    // Fetch users when component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5063/api/User/UserList');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
  
        // Parse the response data
        const parsedUsers = data.map(userString => {
          const [id, name] = userString.split(' - '); // Split the string by ' - '
          return { id, name };
        });
  
        setUsers(parsedUsers); // Set users state with parsed data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers(); // Call the fetchUsers function
  }, []); // Empty dependency array ensures this effect runs only once on mount
  

  const navigationLinks = [
    { name: "User Master" },
    {
      name: "User Access Rights",
    },
    { name: "Change Password"},
  ];

  const Gateway = [
    { name: "Transaction" },
    { name: "Header" },
    { name: "Local Body" },
    { name: "District" },
    { name: "Applicant" },
  ]

  const MIS = [
    { name: "Transaction" },
    { name: "Header" },
    { name: "Local Body" },
    { name: "District" },
    { name: "Applicant" },
    { name: "File List" },
    { name: "File Details" },
  ]

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  
  return (
    <>
      <h1 className="text-xl font-medium pb-4">User Access Rights</h1>
      <div className="w-full md:w-[500px] sm:mx-auto text-left mb-4 border border-gray-300 px-6 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <div>
          <label htmlFor="users" className="block text-sm font-medium text-gray-700">
            Users
          </label>
          <div className="mt-1">
            <select
              id="users"
              name="users"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              <option value="">Select User</option>
              {/* Map over the users state to render options */}
              {users.map((user, index) => (
                <option key={index} value={user.id}>{user.id} - {user.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='block text-sm font-medium text-gray-700'>Select menu</p>
      {navigationLinks?.map((link, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            name={link.name}
            checked={checkedItems[link.name] || false}
            onChange={handleCheckboxChange}
            className="mr-2 outline-none ring-none shadow-none"
          />
          <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
            {link.name}
          </label>
        </div>
      ))}
    </div>
    <div className='flex flex-col gap-2'>
          <p className='block text-sm font-medium text-gray-700'>Gatewaywise reports</p>
      {Gateway.map((link, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            name={link.name}
            checked={checkedItems[link.name] || false}
            onChange={handleCheckboxChange}
            className="mr-2 outline-none ring-none shadow-none"
          />
          <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
            {link.name}
          </label>
        </div>
      ))}
    </div>
    <div className='flex flex-col gap-2'>
          <p className='block text-sm font-medium text-gray-700'>MIS reports</p>
      {MIS?.map((link, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            name={link.name}
            checked={checkedItems[link.name] || false}
            onChange={handleCheckboxChange}
            className="mr-2 outline-none ring-none shadow-none"
          />
          <label htmlFor={`checkbox-${index}`} className="cursor-pointer text-sm pl-2">
            {link.name}
          </label>
        </div>
      ))}
    </div>

        <div className=" flex gap-4">
          <button className="bg-[#0066FF]  text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Save
          </button>
          <button onClick={()=>setCheckedItems({})} className="bg-white border border-gray-300 shadow-sm  text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UserAccessRights;
