import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className='px-5'>
            <nav className=' border-b-[1px] border-gray-300 py-10 flex flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:justify-between'>
                <div className=""><img className='w-44' src="src\assets\images\WqI3UYiTd2qMFxPSa0gRIFcv4U.avif" alt="" /></div>
                <ul className=' text-xl font-medium flex flex-col gap-3 lg:flex-row'>
                    <li>
                        <NavLink className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/home" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/feature" >Feature</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                isActive
                  ? "text-slate-800 font-semibold"
                  : "text-gray-500 hover:text-slate-800"
              }
              to="/pricing" >Pricing</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="py-8  text-gray-500 space-y-5 font-sans">
                <div className=" flex flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:justify-between">
                    <h1 className='font-bold text-lg'>©2024 – Made with 🤍 by Aimal Khan</h1>
                    <ul className='flex items-center justify-center gap-5 '>
                        <li><img className='w-5 opacity-65 hover:opacity-90 cursor-pointer' src="src\assets\images\twitter (2).png" alt="" /></li>
                        <li><img className='w-5 opacity-65 hover:opacity-90 cursor-pointer' src="src\assets\images\instagram (1).png" alt="" /></li>
                        <li><img className='w-6 opacity-65 hover:opacity-90 cursor-pointer' src="src\assets\images\linkedin.png" alt="" /></li>
                    </ul>
                </div>
                <div className="">
                    <p><span className='font-bold '>Disclaimer: </span>CoinPay is a Framer template designed for startups and SaaS companies across various industries. Please note, this app is a fictional example and does not exist as a real service. It’s intended purely for design and demonstration purposes.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
