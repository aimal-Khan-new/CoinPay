import React from 'react'
import Button from '../subComp/Button'
import Payroll from '../subComp/Payroll'
function Features() {
    return (
        <section className='font'>
            <div className='bg-gradient-to-tr from-blue-200 to-blue-400  absolute blur-3xl p-96 rounded-full opacity-50 -left-[40vw] -top-10 -z-50'></div>
            <div className='bg-gradient-to-tr from-blue-400 to-fuchsia-200  absolute blur-3xl p-96 rounded-full opacity-50 right-0 -top-[40vh] -z-50'></div>
            <div data-aos="fade-up" data-aos-duration='2000' data-aos-delay='100' className=" p-5 flex flex-col items-center justify-center space-y-20 mt-40">
                <div className="flex flex-col items-center justify-center gap-10 ">
                    <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>FEATURES</span>
                    <h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-blue-600 lg:text-7xl'>Efficient Crypto<br /> Payroll Solutions</h1>
                    <div className="md:px-24 lg:px-80"><p className='text-lg text-gray-700 font-semibold text-center lg:text-base'>Simplify your payroll process and enhance your team's experience with seamless crypto transactions.</p></div>
                </div>

            </div>

            <section className='overflow-hidden'>
                <div className="flex flex-col-reverse space-y-20 lg:flex-row lg:space-y-0 lg:items-start lg:justify-between lg:p-10 mt-36">
                    <div className="lg:-translate-x-10 flex flex-col items-center justify-center gap-5 mt-16 lg:items-start lg:space-y-10 ">
                        <div data-aos="fade-right" data-aos-duration="1500" className="px-20 md:px-28 lg:px-16"><h1 className='text-5xl text-center font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Automated Payroll</h1>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className="px-24 text-center sm:px-28 md:px-56 lg:px-16 lg:text-start"><p className='text-lg text-gray-500 font-semibold lg:text-base'>Automatically process payroll in various cryptocurrencies. Fast, secure, and without the need for manual input.</p></div>
                        <div data-aos="fade-right" data-aos-duration="2500" className="lg:px-16"><Button text={'Join waitlist'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="bg-gradient-to-t from-blue-400 via-purple-200 to-transparent flex flex-col items-center justify-center rounded-xl lg:w-[50vw]">
                        <div className=""> <img className='w-72 md:w-80' src="https://framerusercontent.com/images/iG04pliWj2lmBe1dgV5sVnXPJE.png?scale-down-to=1024" alt="" /></div>
                        <div className="absolute flex flex-col space-y-80 -translate-y-10 items-center justify-center">
                            <div className="flex space-x-52"><img className='h-40 -translate-x-40' src="https://framerusercontent.com/images/8tvdHB3Y6Yok3TCKyyMtL0pF5pQ.png?scale-down-to=512" alt="" /></div>
                            <div className="translate-x-48"><img className='h-40' src="https://framerusercontent.com/images/jjnMhCSg2IGRHNkqnfmkun49sOo.png?scale-down-to=512" alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse space-y-20 lg:flex-row-reverse lg:space-y-0 lg:items-start lg:justify-between lg:p-10 mt-36">
                    <div className="lg:-translate-x-10 flex flex-col items-center justify-center gap-5 mt-16 lg:items-start lg:space-y-10 ">
                        <div data-aos="fade-left" data-aos-duration="1500" className="px-20 md:px-28 lg:px-16"><h1 className='text-5xl text-center font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Advanced Security</h1>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className="px-24 text-center sm:px-28 md:px-56 lg:px-16 lg:text-start"><p className='text-lg text-gray-500 font-semibold lg:text-base'>Keep your transactions safe with top-tier encryption and fraud prevention technology.</p></div>
                        <div data-aos="fade-left" data-aos-duration="2500" className="lg:px-16"><Button text={'Join waitlist'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="bg-gradient-to-t from-blue-400 via-purple-200 to-transparent flex flex-col items-center justify-center rounded-xl lg:w-[50vw]">
                        <div className=""> <img className='w-72 md:w-80' src="https://framerusercontent.com/images/H6FetZhyCsK0OItcHYcLZ5I7yk.png?scale-down-to=1024" alt="" /></div>
                        <div className="absolute flex flex-col space-y-80 -translate-y-10 items-center justify-center">
                            <div className="flex space-x-52"><img className='h-40 -translate-x-40' src="https://framerusercontent.com/images/HOU7Onzq5CYJoAkO0aASWguzgo.png?scale-down-to=512" alt="" /></div>
                            <div className="translate-x-48"><img className='h-40' src="https://framerusercontent.com/images/95w1yJEV6pOeoJhT3s7HcwR0SE.png?scale-down-to=512" alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse space-y-20 lg:flex-row lg:space-y-0 lg:items-start lg:justify-between lg:p-10 mt-36">
                    <div className="lg:-translate-x-10 flex flex-col items-center justify-center gap-5 mt-16 lg:items-start lg:space-y-10 ">
                        <div data-aos="fade-right" data-aos-duration="1500" className="px-20 md:px-28 lg:px-16"><h1 className='text-5xl text-center font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Multi-Currency Options</h1>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className="px-24 text-center sm:px-28 md:px-56 lg:px-16 lg:text-start"><p className='text-lg text-gray-500 font-semibold lg:text-base'>Flexible solutions in both crypto and traditional currency</p></div>
                        <div data-aos="fade-right" data-aos-duration="2500" className="lg:px-16"><Button text={'Join waitlist'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="bg-gradient-to-t from-blue-400 via-purple-200 to-transparent flex flex-col items-center justify-center rounded-xl lg:w-[50vw]">
                        <div className=""> <img className='w-72 md:w-80' src="https://framerusercontent.com/images/ewCNNnQSVMa0dhUvxDh3Imtc3l8.png?scale-down-to=1024" alt="" /></div>
                        <div className="absolute flex flex-col space-y-80 -translate-y-10 items-center justify-center">
                            <div className="flex space-x-52"><img className='h-40 -translate-x-40' src="https://framerusercontent.com/images/HYsPbQD4gRWmnqWLoc47QJ2ezo.png?scale-down-to=512" alt="" /></div>
                            <div className="translate-x-48"><img className='h-40' src="https://framerusercontent.com/images/mVXCHRyTzuLMG8avaAeYeu88XVw.png?scale-down-to=512" alt="" /></div>
                        </div>
                    </div>
                </div>


            </section>
            
            <div className="">
            <div  className=" p-5 flex flex-col items-center justify-center space-y-20 mt-40">
                <div data-aos="fade-up" data-aos-duration="2500" className="flex flex-col items-center justify-center gap-10 ">
                    <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>FEATURES</span>
                    <div className="lg:px-80"><h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-slate-700 lg:text-5xl'>Features Tailored for Your Business</h1></div>
                    <div className="md:px-24 lg:px-80"><p className='text-lg text-gray-700 font-semibold text-center lg:text-base'>Simplify your payroll process and enhance your team's experience with seamless crypto transactions.</p></div>
                </div>

                <div className="lg:flex lg:flex-wrap items-center justify-center lg:gap-5 space-y-10 lg:space-y-0">
                    <div data-aos-delay="1000" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\back-in-time.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Automated Scheduling</h1>
                        <p className='text-gray-700 text-center text-lg'>Set payments and let our system handle the rest.</p>
                    </div>
                    <div data-aos-delay="1000" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\dates.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Performance Analytics</h1>
                        <p className='text-gray-700 text-center text-lg'>Track and optimize your payroll strategy with detailed insights.</p>
                    </div>
                    <div data-aos-delay="1000" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\money.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Multi-Currency Options</h1>
                        <p className='text-gray-700 text-center text-lg'>Flexible solutions in both crypto and traditional currency</p>
                    </div>
                    <div data-aos-delay="1500" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\support.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Employee Self-Service</h1>
                        <p className='text-gray-700 text-center text-lg'>Empower your team to manage their payment preferences super easily.</p>
                    </div>
                    <div data-aos-delay="1500" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\recycle.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Customizable Cycles</h1>
                        <p className='text-gray-700 text-center text-lg'>Flexible payroll schedules to suit your business needs, weekly, or monthly.</p>
                    </div>
                    <div data-aos-delay="1500" data-aos="fade-up" data-aos-duration="1500" className="bg-[#EBF1FF] p-10 rounded-2xl flex flex-col items-center justify-center space-y-4 sm:px-32 lg:px-5 lg:w-96  ">
                        <span className='bg-blue-600 rounded-full p-5 flex items-center justify-center'><img src="src\assets\images\icon\speedometer.png" alt="" /></span>
                        <h1 className='font-semibold text-2xl text-gray-800'>Real-Time Tracking</h1>
                        <p className='text-gray-700 text-center text-lg'>Monitor each transaction in real time, ensuring transparency and accuracy.</p>
                    </div>
                </div>

            </div>
            </div>

            <div className=""><Payroll/></div>

        </section>
    )
}

export default Features
