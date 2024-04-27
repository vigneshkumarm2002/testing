import React, { useState, useEffect } from 'react';

const UserAccessRights = () => {
  const initialState= {
    userId: "",
    username: "",
    userMaster: 0,
    userAccessRights: 0,
    changePassword: 0,
    gatewaywiseReports: [{
      transaction: 0,
      header: 0,
      localBody: 0,
      district: 0,
      applicant: 0
    }],
    misReports: [{
      header: 0,
      localBody: 0,
      district: 0,
      applicant: 0,
      fileList: 0,
      fileDetails: 0
    }]
  }
  const [selectedUser, setSelectedUser] = useState({ id: '', name: '' });
  const [checkedItems, setCheckedItems] = useState(initialState);

  const [users, setUsers] = useState([]); // State to store users


  
  // Fetch users when component mounts
  useEffect(() => {
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
    { name: "User Access Rights" },
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
    // { name: "Transaction" },
    { name: "Header" },
    { name: "Local Body" },
    { name: "District" },
    { name: "Applicant" },
    { name: "File List" },
    { name: "File Details" },
  ]

const normalizeString = (str) => {
  if (!str) return ''; // Return an empty string if str is undefined, null, or falsy
  // Split the string by spaces
  const words = str.split(' ');
  // Convert the first word to lowercase
  const word1 = words[0].toLowerCase();
  // Convert the second word's first character to uppercase
  const word2 = words.length > 1 ? words[1]?.charAt(0).toUpperCase() + words[1]?.slice(1).toLowerCase() : '';
  // Join the words together
  return word1 + word2;
};

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;

   const editedName=normalizeString(name)
   console.log("edit",editedName)

    // Update the checkedItems state based on the category and checkbox name
    if(category){
      setCheckedItems(prevState => ({
        ...prevState,
        [category]: prevState[category].map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              [editedName]: checked ? 1 : 0 // Set 1 for checked, 0 for unchecked
            };
          }
          return item;
        })
      }));
    
  }
  else{
    setCheckedItems(prevState => ({
      ...prevState,
        [editedName]: checked ? 1 : 0 
    }));
  }
  };

  const handleUserChange = (event) => {
    const userId = event.target.value;
    const selectedUserData = users.find(user => user.id === userId); // Find the selected user data
    console.log("sele",selectedUserData)
    setCheckedItems(prevState => ({
      ...prevState,
      username:selectedUserData?.name ,
        userId: selectedUserData?.id,
       
    }));
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Assuming `users` is defined and contains `ip` and `name` properties
      const response = await fetch("http://localhost:5063/api/User/UserAccessSave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(
           checkedItems
        ),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("checkkitt")
  
    //  alert("Given User Access")
    //  setCheckedItems(initialState)
  
    } catch (error) {
      // Handle error
      console.error("There was an error!", error);
    }


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
          required
        onChange={handleUserChange} // Call handleUserChange when selection changes
        value={checkedItems.userId || ''} // Controlled component: set selected value
        id="users"
        name="users"
        className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
      >
        <option value="">Select User</option>
        {/* Map over the users state to render options */}
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.id} - {user.name}</option>
        ))}
      </select>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <p className='block text-sm font-medium text-gray-700'>Select menu</p>
        {navigationLinks.map((link, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`navigation-checkbox-${index}`}
              name={link.name}
              checked={checkedItems[normalizeString(link.name)] === 1}
              onChange={(event) => handleCheckboxChange(event)}
              className="mr-2 outline-none ring-none shadow-none"
            />
            <label htmlFor={`navigation-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
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
              id={`gateway-checkbox-${index}`}
              name={link.name}
              checked={checkedItems.gatewaywiseReports[0][normalizeString(link.name)] === 1}
              onChange={(event) => handleCheckboxChange(event, 'gatewaywiseReports')}
              className="mr-2 outline-none ring-none shadow-none"
            />
            <label htmlFor={`gateway-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
              {link.name}
            </label>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <p className='block text-sm font-medium text-gray-700'>MIS reports</p>
        {MIS.map((link, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`mis-checkbox-${index}`}
              name={link.name}
              checked={checkedItems.misReports[0][normalizeString(link.name)] === 1}
              onChange={(event) => handleCheckboxChange(event, 'misReports')}
              className="mr-2 outline-none ring-none shadow-none"
            />
            <label htmlFor={`mis-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
              {link.name}
            </label>
          </div>
        ))}
      </div>


        <div className="flex gap-4">
          <button onClick={handleSubmit} className="bg-[#0066FF] text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Save
          </button>
          <button onClick={() => setCheckedItems(initialState) }className="bg-white border border-gray-300 shadow-sm text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UserAccessRights;


//-----------------------------------------------Ram 18/04/2024 ---------------------------------------
                //Need To Check

// import React, { useState, useEffect } from 'react';

// const UserAccessRights = () => {
//   const [checkedItems, setCheckedItems] = useState({
//     navigation: {},
//     Gateway: {},
//     MIS: {}
//   });
//   const [users, setUsers] = useState([]); // State to store users
  
//   // Fetch users when component mounts
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5063/api/User/UserList');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
  
//         // Parse the response data
//         const parsedUsers = data.map(userString => {
//           const [id, name] = userString.split(' - '); // Split the string by ' - '
//           return { id, name };
//         });
  
//         setUsers(parsedUsers); // Set users state with parsed data
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
  
//     fetchUsers(); // Call the fetchUsers function
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   const navigationLinks = [
//     { name: "User Master" },
//     { name: "User Access Rights" },
//     { name: "Change Password"},
//   ];

//   const Gateway = [
//     { name: "Transaction" },
//     { name: "Header" },
//     { name: "Local Body" },
//     { name: "District" },
//     { name: "Applicant" },
//   ]

//   const MIS = [
//     { name: "Transaction" },
//     { name: "Header" },
//     { name: "Local Body" },
//     { name: "District" },
//     { name: "Applicant" },
//     { name: "File List" },
//     { name: "File Details" },
//   ]

//   const handleCheckboxChange = (event, section) => {
//     setCheckedItems(prevState => ({
//       ...prevState,
//       [section]: {
//         ...prevState[section],
//         [event.target.name]: event.target.checked ? 1 : 0,
//       }
//     }));
//   };

//   const saveUserAccessRights = async () => {
//     try {
//       const response = await fetch('http://localhost:5063/api/User/UserAccessSave', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userId: 58, // Set userId appropriately
//           username: "Haritha", // Set username appropriately
//           userMaster: checkedItems.navigation["User Master"] || 0,
//           userAccessRights: checkedItems.navigation["User Access Rights"] || 0,
//           changePassword: checkedItems.navigation["Change Password"] || 0,
//           gatewaywiseReports: Object.keys(checkedItems.Gateway).reduce((acc, key) => {
//             acc.push({ [key]: checkedItems.Gateway[key] });
//             return acc;
//           }, []),
//           misReports: Object.keys(checkedItems.MIS).reduce((acc, key) => {
//             acc.push({ [key]: checkedItems.MIS[key] });
//             return acc;
//           }, [])
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save user access rights');
//       }

//       // Handle success response if needed

//     } catch (error) {
//       console.error('Error saving user access rights:', error);
//     }
//   };
  
//   return (
//     <>
//       <h1 className="text-xl font-medium pb-4">User Access Rights</h1>
//       <div className="w-full md:w-[500px] sm:mx-auto text-left mb-4 border border-gray-300 px-6 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div>
//           <label htmlFor="users" className="block text-sm font-medium text-gray-700">
//             Users
//           </label>
//           <div className="mt-1">
//             <select
//               id="users"
//               name="users"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               <option value="">Select User</option>
//               {/* Map over the users state to render options */}
//               {users.map((user, index) => (
//                 <option key={index} value={user.id}>{user.id} - {user.name}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>Select menu</p>
//           {navigationLinks?.map((link, index) => (
//             <div key={index} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={`navigation-checkbox-${index}`}
//                 name={link.name}
//                 checked={checkedItems.navigation[link.name] === 1}
//                 onChange={(event) => handleCheckboxChange(event, 'navigation')}
//                 className="mr-2 outline-none ring-none shadow-none"
//               />
//               <label htmlFor={`navigation-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//                 {link.name}
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>Gatewaywise reports</p>
//           {Gateway.map((link, index) => (
//             <div key={index} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={`gateway-checkbox-${index}`}
//                 name={link.name}
//                 checked={checkedItems.Gateway[link.name] === 1}
//                 onChange={(event) => handleCheckboxChange(event, 'Gateway')}
//                 className="mr-2 outline-none ring-none shadow-none"
//               />
//               <label htmlFor={`gateway-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//                 {link.name}
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className='flex flex-col gap-2'>
//           <p className='block text-sm font-medium text-gray-700'>MIS reports</p>
//           {MIS?.map((link, index) => (
//             <div key={index} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={`mis-checkbox-${index}`}
//                 name={link.name}
//                 checked={checkedItems.MIS[link.name] === 1}
//                 onChange={(event) => handleCheckboxChange(event, 'MIS')}
//                 className="mr-2 outline-none ring-none shadow-none"
//               />
//               <label htmlFor={`mis-checkbox-${index}`} className="cursor-pointer text-sm pl-2">
//                 {link.name}
//               </label>
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-4">
//           <button onClick={saveUserAccessRights} className="bg-[#0066FF] text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Save
//           </button>
//           <button onClick={() => setCheckedItems({ navigation: {}, Gateway: {}, MIS: {} })} className="bg-white border border-gray-300 shadow-sm text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserAccessRights;
