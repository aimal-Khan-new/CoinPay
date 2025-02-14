import React from 'react'
import Button from './Button'
import "../../App.css";
function Payroll() {
    return (
        <>
        <section className='flex flex-col items-center justify-center  space-y-28 bg-gradient-to-t from-blue-400 via-purple-200 to-transparent '>
            <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className="mt-24 ">
            <div className="flex flex-col items-center justify-center gap-7 ">
                <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>Payroll</span>
                <div className="text-center px-5 lg:px-80"><h1 className='text-5xl text-center font-semibold sm:text-5xl md:text-6xl text-blue-600 lg:text-7xl'>Join the Future of Payroll</h1></div>
                <div className="text-center px-20"><p className='text-base text-blue-800 font-semibold lg:text-base'>Get early access to crypto-powered payroll.Sign up for our waiting list today.</p></div>
                <div className="  "><Button text={'Join Waitlist'} background={'#2763EB'} paddingX={'100'} paddingY={'50'} /></div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className=""><img className='w-96 lg:w-80' src="https://framerusercontent.com/images/X3uOVnyfEjZFh9f0rV1LUqdG9fk.png" alt="" /></div>
            <div className="absolute flex justify-between items-center space-x-[50vw]  ">
            <div className="flex flex-col space-y-72"><img className='h-40' src="https://framerusercontent.com/images/aLYEt7UekBqgEF6eR31JQlG3Rjw.png?scale-down-to=512" alt="" /><img className='h-40' src="https://framerusercontent.com/images/mVXCHRyTzuLMG8avaAeYeu88XVw.png?scale-down-to=512" alt="" /></div>
            <div className="flex flex-col space-y-72"><img className='h-40' src="https://framerusercontent.com/images/GAroemKRPWWEegVfrXKzA7t2qU.png?scale-down-to=1024" alt="" /><img className='h-40' src="https://framerusercontent.com/images/95w1yJEV6pOeoJhT3s7HcwR0SE.png?scale-down-to=512" alt="" /></div>
        </div>
        </section>
        
        </>
    )
}

export default Payroll
