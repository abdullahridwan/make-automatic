import React from "react";
import config from '../public/config.json';
import AppButton from "./AppButton";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-100 transition duration-300 ease-in-out border-b border-gray-200">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <div>
            <img src={config.logoimg} alt="Sample Image" class="object-scale-down h-10 w-10 rounded-lg mr-2" />
          </div>
          <a
            href="/"
            className="text-lg  rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-1xl Avenir tracking-tighter text-black md:text-2x1 lg:text-2xl">
              {config.appName}
            </h1>
          </a>
          <button
            className="text-black cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">

              <li>
                <AppButton />

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-0 transition duration-300 ease-in-out">
  //     <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
  //       <div className="flex flex-row items-center justify-between p-4">
  //         <a
  //           href="/"
  //           className="text-lg rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
  //         >
  //           <h1 className="text-md Avenir tracking-tighter text-white md:text-1x1 lg:text-2xl">
  //             {config.appName}
  //           </h1>
  //         </a>
  //         <ul className="flex flex-grow justify-end flex-wrap items-center">
  //           <li>
  //             <a
  //               className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
  //               href="/"
  //             >
  //               <span className="justify-center">Download</span>
  //               <svg
  //                 className="w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1"
  //                 viewBox="0 0 12 12"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
  //                   fillRule="nonzero"
  //                 />
  //               </svg>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
}
