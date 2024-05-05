import { Fragment, useState, useEffect, memo } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import LogoImage from "./../assets/logo.png"
import {
  ArrowPathIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  ChevronDownIcon,
  ClipboardDocumentIcon,
  DocumentIcon,
  PrinterIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = memo(({ sidebarOpen, setSidebarOpen }) => {

const [roles, setRoles]=useState(null)
  
useEffect(()=>{
  setTimeout(()=>{
    setRoles(localStorage.getItem("access"));
  },500)
  
},[])
 
  const navigationLinks = [
    
    { name: "Dashboard", href: "/", icon: ChartBarSquareIcon, current: true  , },
    { name: "User Master", href: "/user-master", icon: UserIcon, current: false  , permission:"userMaster"},
    {
      name: "User Access Rights",
      href: "/user-access-rights",
      icon: UserCircleIcon,
      current: false , permission:"userAccessRights",
    },
    {
      name: "Gateway Reports",
      icon: BuildingOffice2Icon,
      current: false , permission:"gateway",
      submenus: [
        { name: "Transaction", href: "/gateteway-reports/transaction", icon: BanknotesIcon, current: false , permission:"gatewayTransaction" },
        { name: "Header", href: "/gateteway-reports/headerwise", icon: BuildingOffice2Icon, current: false , permission:"gatewayHeader" },
        { name: "Local body", href: "/gateteway-reports/localbody", icon: BuildingOfficeIcon, current: false , permission:"gatewayLocalBody" },
        { name: "District", href: "/gateteway-reports/districtwise", icon: ChartBarIcon, current: false , permission:"gatewayDistrict" },
        { name: "Applicant", href: "/gateteway-reports/applicant", icon: PrinterIcon, current: false , permission:"gatewayApplicant" }
      ]
    },
    {
      name: "MIS Reports",
      icon: BuildingOfficeIcon,
      current: false , permission:"mis",
      submenus: [
        { name: "Header", href: "/mis-reports/headerwise", icon: BuildingOffice2Icon, current: false , permission:"misHeader" },
        { name: "Local body", href: "/mis-reports/localbody", icon: BuildingOfficeIcon, current: false , permission:"misLocalBody" },
        { name: "District", href: "/mis-reports/districtwise", icon: ChartBarIcon, current: false , permission:"misDistrict" },
        { name: "Applicant", href: "/mis-reports/applicant", icon: PrinterIcon, current: false , permission:"misApplicant" },
        { name: "File List", href: "/mis-reports/file-list", icon: DocumentIcon, current: false , permission:"misFileList" },
        { name: "File Details", href: "/mis-reports/file-details", icon: ClipboardDocumentIcon, current: false , permission:"misFileDetails" }
      ]
    },
    { name: "Change Password", href: "/change-password", icon: ArrowPathIcon, current: false , permission:"changePassword" },
  ];

  const [navigation, setNavigation] = useState(navigationLinks);
  const location = useLocation();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  useEffect(() => {
    const updatedNavigation = navigation?.map((item) => {
      if (item.submenus) {
        const submenus = item.submenus.map(submenu => ({
          ...submenu,
          current: submenu.href === location.pathname
        }));
        // Check if any submenu is active
        const isSubmenuActive = submenus.some(submenu => submenu.current);
        return {
          ...item,
          current: isSubmenuActive, // Set main menu current to true if any submenu is active
          submenus
        };
      } else {
        return {
          ...item,
          current: item.href === location.pathname
        };
      }
    });
    setNavigation(updatedNavigation);
  }, [location]);

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"

                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F9FAFB]  pb-4">
                    <div className="flex h-16 shrink-0 items-center px-6">
                      <img
                        className="h-8 w-auto"
                        src={LogoImage}
                        alt="CMDA"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col -mt-2">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className=" space-y-1">
                            {navigation.map((item, index) => (
                              <li key={item.name}>
                                {roles?.includes(item?.permission) && item.submenus ? (
                                  <div className="relative">
                                    <div
                                      onClick={() => toggleSubMenu(index)}
                                      className={classNames(
                                        item.current ? "bg-gray-300 text-gray-900" : "text-gray-900 ",
                                        "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium cursor-pointer"
                                      )}
                                    >
                                      <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                                      {item.name}
                                      <ChevronDownIcon
                                        className={classNames(
                                          openSubMenuIndex === index ? "transform rotate-180" : "",
                                          "w-4 h-4 ml-auto"
                                        )}
                                      />
                                    </div>
                                    <Transition
                                      show={openSubMenuIndex === index}
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0 translate-y-1"
                                      enterTo="opacity-100 translate-y-0"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100 translate-y-0"
                                      leaveTo="opacity-0 translate-y-1"
                                    >
                                      <div className="w-full divide-y divide-gray-100 focus:outline-none">
                                        {item.submenus.map((submenu) => (
                                         roles?.includes(submenu?.permission) && <div key={submenu.name}>
                                            <Link
                                              to={submenu.href}
                                              onClick={() => setSidebarOpen(false)}
                                              className={classNames(
                                                submenu.current ? "bg-gray-300 text-gray-900" : "text-gray-900",
                                                "pl-10 group flex gap-x-3 items-center pr-4 py-2 text-sm leading-6 font-medium"
                                              )}
                                            >
                                              <submenu.icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                                              {submenu.name}
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </Transition>
                                  </div>
                                ) : (   item?.permission ?
                                  roles?.includes(item?.permission)  &&
                                  <Link
                                    to={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={classNames(
                                      item.current ? "bg-gray-300 text-gray-900" : " text-gray-900 ",
                                      "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium"
                                    )}
                                  >
                                    <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                                    {item.name}
                                  </Link> :   <Link
                                    to={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={classNames(
                                      item.current ? "bg-gray-300 text-gray-900" : " text-gray-900 ",
                                      "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium"
                                    )}
                                  >
                                    <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                                    {item.name}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden mt-[64px] lg:fixed l lg:inset-y-0 lg:z-10 lg:flex lg:w-[260px] lg:flex-col border-r-2 ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto element bg-[#F9FAFB] pt-4 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className=" space-y-1">
                    {navigation.map((item, index) => (
                      <li key={item.name}>
                        {roles?.includes(item?.permission) && item.submenus ? (
                          <div className="relative">
                            <div
                              onClick={() => toggleSubMenu(index)}
                              className={classNames(
                                item.current ? "bg-gray-300 text-gray-900" : "text-gray-900 hover:bg-gray-300",
                                "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium cursor-pointer"
                              )}
                            >
                              <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                              {item.name}
                              <ChevronDownIcon
                                className={classNames(
                                  openSubMenuIndex === index ? "transform rotate-180" : "",
                                  "w-4 h-4 ml-auto"
                                )}
                              />
                            </div>
                            <Transition
                              show={openSubMenuIndex === index}
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <div className="w-full divide-y divide-gray-100 focus:outline-none">
                                {item.submenus.map((submenu) => (
                                  roles?.includes(submenu?.permission)&&  <div key={submenu.name}>
                                    <Link
                                      to={submenu.href}
                                      className={classNames(
                                        submenu.current ? "bg-gray-300 text-gray-900" : "text-gray-900 hover:bg-gray-300",
                                        "pl-10 group flex gap-x-3 items-center pr-4 py-2 text-sm leading-6 font-medium"
                                      )}
                                    >
                                      <submenu.icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                                      {submenu.name}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </Transition>
                          </div>
                        ) : ( item?.permission ? roles?.includes(item?.permission)  &&
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current ? "bg-gray-300 text-gray-900" : " text-gray-900 hover:bg-gray-300",
                              "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium"
                            )}
                          >
                            <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                            {item.name}
                          </Link> :    <Link
                            to={item.href}
                            className={classNames(
                              item.current ? "bg-gray-300 text-gray-900" : " text-gray-900 hover:bg-gray-300",
                              "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium"
                            )}
                          >
                            <item.icon className="h-5 w-5 shrink-0 text-gray-900" aria-hidden="true" />
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </>
  );
});

export default Sidebar;






// import { Fragment, useState, useEffect, memo } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Link, useLocation } from "react-router-dom";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Sidebar = memo(({ sidebarOpen, setSidebarOpen }) => {
//   const [navigation, setNavigation] = useState([]);
//   const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     // Fetch navigation data from API endpoint
//     fetchNavigationData()
//       .then((data) => setNavigation(data))
//       .catch((error) => console.error("Error fetching navigation data:", error));
//   }, []);

//   const fetchNavigationData = async () => {
//     try {
//       // Perform API call to fetch navigation data
//       const response = await fetch("http://localhost:5063/api/User/VerifyUserMenu");
//       if (!response.ok) {
//         throw new Error("Failed to fetch navigation data");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const toggleSubMenu = (index) => {
//     setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <>
//       <div>
//         {/* Your existing code for mobile sidebar */}
//       </div>

//       {/* Static sidebar for desktop */}
//       <div className="hidden mt-[64px] lg:fixed l lg:inset-y-0 lg:z-10 lg:flex lg:w-[260px] lg:flex-col border-r-2">
//         <div className="flex grow flex-col gap-y-5 overflow-y-auto element bg-[#F9FAFB] pt-4 pb-4">
//           <nav className="flex flex-1 flex-col">
//             <ul role="list" className="flex flex-1 flex-col gap-y-7">
//               {navigation.map((item, index) => (
//                 <li key={item.menuId}>
//                   {item.subMenu ? (
//                     <div className="relative">
//                       <div
//                         onClick={() => toggleSubMenu(index)}
//                         className={classNames(
//                           "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium cursor-pointer",
//                           { "bg-gray-300 text-gray-900": item.current, "text-gray-900 hover:bg-gray-300": !item.current }
//                         )}
//                       >
//                         {item.menuName}
//                       </div>
//                       <Transition
//                         show={openSubMenuIndex === index}
//                         as={Fragment}
//                         enter="transition ease-out duration-200"
//                         enterFrom="opacity-0 translate-y-1"
//                         enterTo="opacity-100 translate-y-0"
//                         leave="transition ease-in duration-150"
//                         leaveFrom="opacity-100 translate-y-0"
//                         leaveTo="opacity-0 translate-y-1"
//                       >
//                         <div className="w-full divide-y divide-gray-100 focus:outline-none">
//                           {item.subMenu.map((submenu) => (
//                             <div key={submenu.menuId}>
//                               <Link
//                                 to={submenu.url}
//                                 className={classNames(
//                                   "pl-10 group flex gap-x-3 items-center pr-4 py-2 text-sm leading-6 font-medium",
//                                   { "bg-gray-300 text-gray-900": submenu.current, "text-gray-900 hover:bg-gray-300": !submenu.current }
//                                 )}
//                               >
//                                 {submenu.menuName}
//                               </Link>
//                             </div>
//                           ))}
//                         </div>
//                       </Transition>
//                     </div>
//                   ) : (
//                     <Link
//                       to={item.url}
//                       className={classNames(
//                         "group flex gap-x-3 items-center px-4 py-2 text-sm leading-6 font-medium",
//                         { "bg-gray-300 text-gray-900": item.current, "text-gray-900 hover:bg-gray-300": !item.current }
//                       )}
//                     >
//                       {item.menuName}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// });

// export default Sidebar;
