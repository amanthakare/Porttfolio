import React from "react";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './../assets/Logo6.png'
import { MdDownloadForOffline } from "react-icons/md";


const navigation = [
            { name: 'Home', href: '#' },
            { name: 'About', href: '#' },
            { name: 'Education', href: '#' },
            { name: 'Skills', href: '#' },
            { name: 'Contacts', href: '#' },
          ]

          export default function Navbar() {
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
            
            return(
                <div className="bg-white">
                    <header className="absolute inset-x-0 top-0 z-50">
                      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              My Resume <span aria-hidden="true">&darr;</span>
            </a>
          </div>
                      </nav>
                      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                         <div className="fixed inset-0 z-50" />
                      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                      <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto"
                            src={logo}
                            alt=""
                          />
                        </a>
                        <button
                          type="button"
                          className="-m-2.5 rounded-md p-2.5 text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="{Contact}"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    My Resume <svg className="animate-bounce w-6 h-6"></svg>

                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
            );
        }
















        
// import Home from "../home/Home";

// const Navbar = () => {
//     return(
//     //     <nav className="bg-gray-800 p-4">
//     //     <div className="container mx-auto flex justify-between items-center">
//     //       <div className="text-white font-bold">Logo</div>
//     //       <div className="hidden md:flex space-x-4">
//     //         <a href="#" className="text-white">Home</a>
//     //         <a href="#" className="text-white">About</a>
//     //         <a href="#" className="text-white">Services</a>
//     //         <a href="#" className="text-white">Contact</a>
//     //       </div>
//     //       {/* Hamburger menu for mobile */}
//     //       <div className="md:hidden">
//     //         <button className="text-white">
//     //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//     //           </svg>
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </nav>

//         // <nav className="bg-slate-300 bg-transparent z-0 p-4 xm-2 border-y-lime-400 rounded-lg shadow-xl text-black">
//         //     <div className="mx-auto flex justify-between items-center ">
//         //         <div className="font-bold ">Aman Thakare</div>
//         //             <div className="hidden md:flex space-x-6 float-end">
//         //                 <a href="{Home}" className="text-black">Home</a>
//         //                 <a href="#" className="text-black">Education</a>
//         //                 <a href="#" className="text-black">Projects</a>
//         //                 <a href="#" className="text-black">Contact</a>
//         //             </div>
//         //     </div>

//         // </nav>









//         // <div className="mx-8 border-b-2 py-4">
//         // <h1>Navbar</h1>
//         //    <div className=" sm:grid-rows-4  mg:grid text-right">
//         //     <ul className="space-x-4  hover:cursor-pointer">
//         //         <li></li>
//         //     <a href="{Home}" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
//         //     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Education</a>
//         //     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Skills</a>
//         //     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
//         //     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
//         //     </ul>
//         //    </div>
           
//         // </div>

//     );   
// };
// export default Navbar;

