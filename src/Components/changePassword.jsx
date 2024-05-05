// import { useState } from "react";

// export default function ChangePassword() {
//   const [role, setRole] = useState("user");

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };
//   return (
//     <>
//       <h1 className="text-xl font-medium  ">Change password</h1>
//       <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
      
//         <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
//             <form className="space-y-6" action="#" method="POST">
//               <div>
//                 <label
//                   htmlFor="old-password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//             Old Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="old-password"
//                     name="old-password"
//                     type="passowrd"
//                     autoComplete="old-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="new-password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   New Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="new-password"
//                     name="new-password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="confirm-password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Confirm New Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="confirm-password"
//                     name="confirm-password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>


//               <div className="flex gap-4">
//                 <button
//                  onClick={()=> alert("Form Submitted")}
//                  className="bg-[#0066FF] w-[50%]  text-white font-medium shadow-sm py-1.5 px-4 rounded"
//                 >
//                   Change
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-white border w-[50%] shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


//------------------------------------------- Ram New CODE 22/04/2024 -----------------------

import { useState ,useEffect} from "react";

async function changePasswordApi(userId, oldPassword, newPassword) {
  try {
    const response = await fetch("http://localhost:5063/api/User/ChangePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You may need to include additional headers like authorization token
      },
      body: JSON.stringify({
        userId: userId,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to change password");
    }
    const data = await response.json();
    return data; // You can handle the response data as needed
  } catch (error) {
    throw new Error(error.message);
  }
}

export default function ChangePassword() {
  const [userId, setUserId] = useState("");                       // Set the userId here
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {                                             //Doubt Need To Check     
    const userIdFromSession = localStorage.getItem("userId"); 
    setUserId(userIdFromSession);
  }, []);

  
  

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        setError(""); // Clear any previous errors
        // Call the API function to change the password
        await changePasswordApi(userId, oldPassword, newPassword);
        // Password changed successfully, show success message or redirect
        alert("Password changed successfully");
        window.location.reload();
      } catch (error) {
        setError("Failed to change password");
      }
    }
  };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//     } else {
//       try {
//         setError(""); // Clear any previous errors
//         // Call the API function to change the password
//         await changePasswordApi(userId, oldPassword, newPassword);
//         // Password changed successfully, show success message
//         const successMessage = document.createElement("div");
//         successMessage.textContent = "Password changed successfully";
//         successMessage.style.color = "green";
//         // Append success message to the DOM
//         document.body.appendChild(successMessage);
//         // Optionally, you can reload the page after a certain time
//         setTimeout(() => {
//           successMessage.remove(); // Remove success message after a certain time
//           window.location.reload();
//         }, 1000); // 1000 milliseconds (1 seconds) - adjust as needed
//       } catch (error) {
//         setError("Failed to change password");
//       }
//     }
// };


  return (
    <>
      <h1 className="text-xl font-medium">Change password</h1>
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="old-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Old Password
                </label>
                <div className="mt-2">
                  <input
                    id="old-password"
                    name="old-password"
                    type="password"
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                    autoComplete="old-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    id="new-password"
                    name="new-password"
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    autoComplete="new-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    autoComplete="confirm-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-[#0066FF] w-[50%] text-white font-medium shadow-sm py-1.5 px-4 rounded"
                >
                  Change
                </button>
                <button
                  type="button"
                  className="bg-white border w-[50%] shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
