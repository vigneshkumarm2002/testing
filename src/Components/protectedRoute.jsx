import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, permission }) {
  const isAuthenticated = localStorage.getItem("is_authenticated")
  const roles = localStorage.getItem("access");

useEffect(()=>{
    console.log("check",(isAuthenticated && permission.length >= 0) &&
    (isAuthenticated && roles?.includes(permission)))
},[permission])

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (isAuthenticated && permission.length >= 0) &&
      (isAuthenticated && roles?.includes(permission)) ? (
      children
    ) : (
      <Navigate replace to="/access-denied" />
    );
  }
}

{/* <Route
        path="/"
        element={
          <ProtectedRoute permission={["Administrator", "manager", "Member"]}>
            <Layout />
          </ProtectedRoute>
        }
      ></Route> */}

export default ProtectedRoute;




