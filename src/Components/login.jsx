import { useState } from "react";
import { useNavigation } from "react-router-dom";

export default function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  


  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the data to your backend API
    fetch("http://localhost:5063/api/User/UserVerification", {
      method: "POST", // Change method to POST
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Login Successful") 
        {
          // Handle successful login
          //alert("Login Successful");
          //window.location.href = "/user-master";
          // navigate("/user-master")
          window.location.href = "http://localhost:3000/cmda#/user-master";
          
          // Redirect or perform any other action upon successful login
        } 
        else if(data.message==="Invalid Username or Password") 
        {
          // Handle incorrect credentials
          //alert("Invalid Username or Password");
          document.getElementById("loginErrorMessage").style.display = "block";
          //window.location.reload();
        }
      })
      .catch((error) => {
        // Handle error
        console.error("There was an error!", error);
       
      });
  };
  

  return (
    <>
      {/* <h1 className="text-xl font-medium">User Login</h1> */}
      <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>         
              <div className="flex justify-center"> 
                <button
                  type="submit"
                  className="bg-[#0066FF] w-[50%]  text-white font-medium shadow-sm py-1.5 px-4 rounded"
                >
                  Login
                </button> 
              </div>
              <div id="loginErrorMessage" style={{display: 'none', color: 'red'}}>Log in details are not correct</div> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


// import { useState } from "react";
// import { useNavigation } from "react-router-dom";

// export default function LoginUser() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  


//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the data to your backend API
//     fetch("http://localhost:5063/api/User/VerifyUserMenu", {
//       method: "POST", // Change method to POST
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password
//       }),
//     })
//       .then((response) => {
        
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.message === "Login Successful") 
//         {
//           // Handle successful login
//           //alert("Login Successful");
//           //window.location.href = "/user-master";
//           // navigate("/user-master")
//           window.location.href = "http://localhost:3000/cmda#/user-master";
          
//           // Redirect or perform any other action upon successful login
//         } 
//         else if(data.message==="Invalid Username or Password") 
//         {
//           // Handle incorrect credentials
//           //alert("Invalid Username or Password");
//           document.getElementById("loginErrorMessage").style.display = "block";
//           //window.location.reload();
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("There was an error!", error);
       
//       });
//   };
  

//   return (
//     <>
//       {/* <h1 className="text-xl font-medium">User Login</h1> */}
//       <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Username
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     autoComplete="username"
//                     required
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>         
//               <div className="flex justify-center"> 
//                 <button
//                   type="submit"
//                   className="bg-[#0066FF] w-[50%]  text-white font-medium shadow-sm py-1.5 px-4 rounded"
//                 >
//                   Login
//                 </button> 
//               </div>
//               <div id="loginErrorMessage" style={{display: 'none', color: 'red'}}>Log in details are not correct</div> 
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }































































//--------------------------------------------------------------------------------------------------------------
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginUser({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the data to your backend API
//     fetch("http://localhost:5063/api/User/UserVerification", {
//       method: "POST", // Change method to POST
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.message === "Login Successfull") {
//           // Handle successful login
//           alert("Login Successful");
//           onLoginSuccess(); // Call the onLoginSuccess callback
//           navigate("/cmda#/user-master"); // Navigate to the desired route
//         } else if (data.message === "Invalid Username or Password") {
//           // Handle incorrect credentials
//           alert("Invalid Username or Password");
//           // Clear the input fields
//           setUsername("");
//           setPassword("");
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("There was an error!", error);
//       });
//   };

//   return (
//     <>
//       <h1 className="text-xl font-medium">User Login</h1>
//       <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Your form fields */}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginUser({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send the data to your backend API
//     fetch("http://localhost:5063/api/User/UserVerification", {
//       method: "POST", // Change method to POST
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.message === "Login Successfull") {
//           // Handle successful login
//           alert("Login Successful");
//           onLoginSuccess(); // Call the onLoginSuccess callback
//           navigate("/user-master"); // Navigate to the desired route
//         } else if (data.message === "Invalid Username or Password") {
//           // Handle incorrect credentials
//           alert("Invalid Username or Password");
//           // Clear the input fields
//           setUsername("");
//           setPassword("");
//         }
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("There was an error!", error);
//       });
//   };

//   return (
//     <>
//       <h1 className="text-xl font-medium">User Login</h1>
//       <div className="flex min-h-full flex-1 flex-col justify-center py-4 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="bg-white px-6 py-8 border border-gray-300 rounded-md sm:rounded-lg sm:px-12">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Your form fields */}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
