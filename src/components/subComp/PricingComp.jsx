import React from 'react'
import Button from './Button'

function PricingComp() {
    return (
        <>
        <section className='font'>
            <div className='bg-gradient-to-tr from-blue-200 to-blue-400  absolute blur-3xl p-96 rounded-full opacity-50 -left-[40vw] -top-10 -z-50'></div>
            <div className='bg-gradient-to-tr from-blue-400 to-fuchsia-200  absolute blur-3xl p-96 rounded-full opacity-50 right-0 -top-[40vh] -z-50'></div>
        <div className=" p-5 flex flex-col items-center justify-center space-y-20 mt-40">
            <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className="flex flex-col items-center justify-center gap-5 ">
                <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>Pricing</span>
                <h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-blue-600 lg:text-7xl'>Plans for<br/> everybody</h1>
                <p className='text-lg text-center text-blue-800 font-semibold lg:text-base'>Start with any plan, it’s free and always will be.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-10 lg:flex-row lg:w-full lg:space-y-0 gap-2 ">
                <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className="bg-white border-[1px] border-gray-300 rounded-lg p-10 h-[200px] w-[0px] flex flex-col items-start justify-between lg:w-[350px] aos-init aos-animate">
                    <div className="border-b-[1px] border-gray-300 flex flex-col space-y-5">
                        <h1 className='text-4xl font-bold text-gray-700'>Essential</h1>
                        <p className='text-gray-500 font-medium text-lg lg:text-base'>Designed for large enterprises. Get advanced analytics, priority support, and full customization.</p><br />
                    </div>
                    <div className="">
                        <h1 className='text-3xl font-bold text-black lg:text-5xl'>Free</h1>
                        <ul className='list-disc translate-x-4'>
                            <li className='text-lg text-gray-500 font-medium'><span className='bg-blue-500 rounded-full'/>Sales volume up to $5k/mo</li>
                        </ul>
                    </div>
                    <div className=" translate-x-10 lg:translate-x-0"><Button text={'Subscribe'} paddingX={'100'} paddingY={'50'} /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className="bg-blue-600 border-[1px] border-gray-300 rounded-lg p-10 h-[500px] w-[450px] flex flex-col items-start justify-between lg:w-[350px]">
                    <div className="border-b-[1px] border-gray-300 flex flex-col space-y-5">
                        <h1 className='text-4xl font-bold text-white'>Intermediate</h1>
                        <p className='text-white font-medium text-lg lg:text-base'>Best for growing companies, with multi-currency payroll options and customer support.</p><br />
                    </div>
                    <div className="">
                        <h1 className='text-3xl font-bold text-white lg:text-5xl'>$29/mo</h1>
                        <ul className='list-disc translate-x-4'>
                            <li className='text-lg text-white font-medium'>Sales volume up to $5k/mo</li>
                            <li className='text-lg text-white font-medium'>Return customer rate more than 2,5%</li>
                        </ul>
                    </div>
                    <div className=" translate-x-10 lg:translate-x-0"><Button text={'Subscribe'} paddingX={'100'} paddingY={'50'} background={'#FFFFFF'} color={'#2663EB'} /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration='2000'  data-aos-delay='100' className="bg-white border-[1px] border-gray-300 rounded-lg p-10 h-[500px] w-[450px] flex flex-col items-start justify-between lg:w-[350px]">
                    <div className="border-b-[1px] border-gray-300 flex flex-col space-y-5">
                        <h1 className='text-4xl font-bold text-gray-700'>Expert</h1>
                        <p className='text-gray-500 font-medium text-lg lg:text-base'>Designed for large enterprises. Get advanced analytics, priority support, and full customization.</p><br />
                    </div>
                    <div className="">
                        <h1 className='text-3xl font-bold text-black lg:text-5xl'>$49/mo</h1>
                        <ul className='list-disc translate-x-4'>
                            <li className='text-lg text-gray-500 font-medium'><span className='bg-blue-500 rounded-full'/>Sales volume up to $5k/mo</li>
                            <li className='text-lg text-gray-500 font-medium'><span className='bg-blue-500 rounded-full'/>Return customer rate more than 2,5%</li>
                            <li className='text-lg text-gray-500 font-medium'><span className='bg-blue-500 rounded-full'/>24/7 Customer support</li>
                        </ul>
                    </div>
                    <div className=" translate-x-10 lg:translate-x-0"><Button text={'Subscribe'} paddingX={'100'} paddingY={'50'} /></div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default PricingComp
