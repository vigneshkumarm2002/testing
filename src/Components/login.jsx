import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  [showPage, setShowPage]=useState(false)
  const [userDetails, setUserDetails]=useState(null)

  const navigate=useNavigate()
  
 

  useEffect(()=>{
    const checkAuthenticate= localStorage.getItem("is_authenticated")

    if(checkAuthenticate){
      setShowPage(false)
      navigate("/")
    }
    else{
      setShowPage(true)
    }

  },[])


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
        setUserDetails(data)
        if (data?.userId) 
        {
          storeUserAccess(data?.userId); 
          
          localStorage.setItem("userName",data?.userName)
          localStorage.setItem("userId",data?.userId)
          navigate("/")
          localStorage.setItem("is_authenticated",true)
        } 
        else 
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

  const storeUserAccess = async (id) => {
    try {
      const url = `http://localhost:5063/api/User/UserAccessGetDetails?uId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      localStorage.setItem("access",data)
      console.log("access", data);
      window.location.reload();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
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
              {/* <div id="loginErrorMessage" style={{display: 'none', color: 'red'}}>Please enter valid username and password</div>          */}
              <div id="loginErrorMessage" style={{display: 'none', color: 'red'}}>Login Details are Not Correct</div>         
              <div className="flex justify-center"> 
                <button
                  type="submit"
                  className="bg-[#0066FF] w-[50%]  text-white font-medium shadow-sm py-1.5 px-4 rounded"
                >
                  Login
                </button> 
              </div>
       
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



