import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import FileDetails from './FileDetails';
import TransactionReport from './transactionReport';
import UserMaster from './userMaster';
import UserAccessRights from './userAccessRights';
import HeaderwiseReport from './headerwiseReport';
import FileList from './fileList';
import LocalBodyReport from './localBodyReport';
import DistrictWiseReport from './districtwiseReport';
import ChangePassword from './changePassword';
import ApplicantReport from './applicant';

import MISLocalBody from './MIS/localBody';
import MISHeader from './MIS/headerwise';
import MISDistrict from './MIS/districtwiseMIS';
import MISApplicant from './MIS/applicantMIS';
import ESlip from './eSlip';
import ProtectedRoute from './protectedRoute';
import AccessDenied from './accessDenied';
import Dashboard from './dashboard';

const Layout = ({ sidebarOpen, setSidebarOpen,  }) => {
  const location = useLocation();
  const hideSidebarRoutes = ['/payment', '/checkout', '/payment-page', '/payment-confirm','/e-pay','/login'];

  // Function to check if the current location matches any of the routes that should hide the sidebar
  const shouldHideSidebar = () => {
    return hideSidebarRoutes.includes(location.pathname);
  };

 

  return (
    <div className="flex lg:gap-4">
      {!shouldHideSidebar() && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      <div className={` ${shouldHideSidebar() ? 'pt-[78px]' : 'w-full overflow-hidden lg:pl-[260px] pt-[78px] py-4 px-4'}`}>
        <Routes>
        <Route path="/" element={   
        <Dashboard />
 } />
          <Route path="/gateteway-reports/transaction" element={ <ProtectedRoute permission={["gatewayTransaction"]}><TransactionReport />   </ProtectedRoute> } />
          <Route path="/mis-reports/file-list" element={ <ProtectedRoute permission={["misFileList"]}><FileList />   </ProtectedRoute> } />
          <Route path="/mis-reports/file-details" element={ <ProtectedRoute permission={["misFileDetails"]}><FileDetails />   </ProtectedRoute> } />
          <Route path="/user-master" element={ <ProtectedRoute permission={["userMaster"]}><UserMaster />   </ProtectedRoute> } />
          <Route path="/user-access-rights" element={  <ProtectedRoute permission={["userAccessRights"]}> <UserAccessRights />    </ProtectedRoute> } />
          <Route path="/gateteway-reports/localbody" element={ <ProtectedRoute permission={["gatewayLocalBody"]}><LocalBodyReport/>   </ProtectedRoute> } />
          <Route path="/gateteway-reports/headerwise" element={<ProtectedRoute permission={["gatewayHeader"]}><HeaderwiseReport />   </ProtectedRoute> } />
          <Route path="/gateteway-reports/districtwise" element={ <ProtectedRoute permission={["gatewayDistrict"]}><DistrictWiseReport />   </ProtectedRoute> } />
          <Route path="/gateteway-reports/applicant" element={ <ProtectedRoute permission={["gatewayApplicant"]}><ApplicantReport />   </ProtectedRoute> } />
          <Route path="/change-password" element={ <ProtectedRoute permission={["changePassword"]}><ChangePassword />   </ProtectedRoute> } />
          <Route path="/mis-reports/localbody" element={ <ProtectedRoute permission={["misLocalBody"]}><MISLocalBody />   </ProtectedRoute> } />
          <Route path="/mis-reports/headerwise" element={ <ProtectedRoute permission={["misHeader"]}><MISHeader />   </ProtectedRoute> } />
          <Route path="/mis-reports/districtwise" element={ <ProtectedRoute permission={["misDistrict"]}><MISDistrict />   </ProtectedRoute> } />
          <Route path="/mis-reports/applicant" element={ <ProtectedRoute permission={["misApplicant"]}><MISApplicant />   </ProtectedRoute> } />
      <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
