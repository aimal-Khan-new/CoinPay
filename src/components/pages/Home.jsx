import React from 'react'
import Button from '../subComp/Button'
import LogoWall from '../subComp/LogoWall'
import PricingComp from '../subComp/PricingComp'
import Faqs from '../subComp/Faqs'
import Payroll from '../subComp/Payroll'
function Home() {
    
      
    const logoImgs = [
        { altText: "Kansas " },
        { altText: "Colorado" },
        { altText: "delaware" },
        { altText: "Amsterdam" },
        { altText: "SpringField" },
        { altText: "Hamilton" },
        { altText: "Nairobi" }
    ];
    const secondScroll = [
        { altText: 'Simplifying payroll, securing your future.' },
        { altText: 'Simplifying payroll, securing your future.' },
        { altText: 'Simplifying payroll, securing your future.' },
        { altText: 'Simplifying payroll, securing your future.' },
    ]
    return (
        <>

            <section className='overflow-hidden'>
                <div className="flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:items-start lg:justify-between lg:p-16">
                <div className=" lg:-translate-x-10 px-10 flex flex-col items-start justify-center gap-5 mt-16 lg:items-start lg:space-y-5 ">
                            <div data-aos="fade-right" data-aos-duration="1500" className="px-0 md:px-10 lg:px-10"><h1 className='text-5xl text-start font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Effortless payroll in Crypto</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="2000" className="px-0 text-center sm:px-0 sm:-translate-x-36 md:px-10 md:-translate-x-40 lg:-translate-x-0 lg:px-10 lg:text-start "><p className='text-lg text-gray-500 font-semibold lg:text-base text-start'>Ensure timely and accurate payroll management, supported by a robust, user-friendly platform.</p></div>
                            <div data-aos="fade-right" data-aos-duration="2500" className=" md:px-10 lg:px-10"><Button text={'Get started'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                        </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="bg-gradient-to-t from-blue-400 via-purple-200 to-transparent flex flex-col items-center justify-center rounded-xl lg:w-[50vw]">
                        <div className=""> <img className='w-72 md:w-80' src="https://framerusercontent.com/images/ewCNNnQSVMa0dhUvxDh3Imtc3l8.png?scale-down-to=1024" alt="" /></div>
                        <div className="absolute flex flex-col space-y-80 -translate-y-10 items-center justify-center">
                            <div className="flex space-x-52"><img className='h-40' src="https://framerusercontent.com/images/lqEg2oZro4LTrDpI7Ml1JVCEM4.png?scale-down-to=512" alt="" /><img className='h-40' src="https://framerusercontent.com/images/aLYEt7UekBqgEF6eR31JQlG3Rjw.png?scale-down-to=512" alt="" /></div>
                            <div className="-translate-x-52"><img className='h-40' src="https://framerusercontent.com/images/mVXCHRyTzuLMG8avaAeYeu88XVw.png?scale-down-to=512" alt="" /></div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '100px', width: '100%', position: 'relative' }}>
                    <LogoWall
                        items={logoImgs}
                        direction='horizontal'
                        pauseOnHover={true}
                        size='clamp(8rem, 1rem + 20vmin, 25rem)'
                        duration='60s'
                        bgColor='#FFFFFF'
                        bgAccentColor='#FFFFFF'
                        Color='#A3A3A3'
                        inputH='100px'
                        New='40px'
                    />
                </div>
                <br />
                <section className='bg-[#EBF1FF] rounded-2xl py-[30vh]'>
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center justify-center gap-5 p-5 ">
                        <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>FEATURES</span>
                        <div className="lg:px-48"><h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-blue-600 lg:text-6xl'>Easy Crypto Payments For Your Team</h1></div>
                    </div>

                    <div className="flex flex-col-reverse items-center lg:flex-row lg:mt-52 lg:items-start lg:gap-10">
                    <div className=" lg:-translate-x-10 px-10 flex flex-col items-start justify-center gap-5 mt-16 lg:items-start lg:space-y-5 ">
                            <div data-aos="fade-right" data-aos-duration="1500" className="px-0 md:px-10 lg:px-10"><h1 className='text-5xl text-start font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Streamlined Crypto Payroll</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="2000" className="px-0 text-center sm:px-0 sm:-translate-x-36 md:px-10 md:-translate-x-40 lg:-translate-x-0 lg:px-10 lg:text-start "><p className='text-lg text-gray-500 font-semibold lg:text-base text-start'>Automate payments effortlessly with our intuitive system. Reduce manual tasks and focus on growth.</p></div>
                            <div data-aos="fade-right" data-aos-duration="2500" className=" md:px-10 lg:px-10"><Button text={'Explore Features'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" className=""><img className='lg:w-[90%]' src="src\assets\images\avaRNJzRjnM9vG1OVwLKdMPNU0.avif" alt="" /></div>
                    </div>

                    <div className="flex flex-col-reverse items-center lg:items-start lg:gap-10 lg:flex-row-reverse lg:mt-52">
                        <div className=" lg:-translate-x-10 px-10 flex flex-col items-start justify-center gap-5 mt-16 lg:items-start lg:space-y-5 ">
                            <div data-aos="fade-left" data-aos-duration="1500" className="px-0 md:px-10 lg:px-10"><h1 className='text-5xl text-start font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Reliable Payment Processes</h1>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="2000" className="px-0 text-center sm:px-0 sm:-translate-x-36 md:px-10 md:-translate-x-40 lg:-translate-x-0 lg:px-10 lg:text-start "><p className='text-lg text-gray-500 font-semibold lg:text-base text-start'>Ensure timely and accurate payroll management, supported by a robust, user-friendly platform.</p></div>
                            <div data-aos="fade-left" data-aos-duration="2500" className=" md:px-10 lg:px-10"><Button text={'Get started'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" className=""><img className='lg:w-[90%]' src="src\assets\images\3MUbL6L3K0VWwjEU0SADn1Jre64.avif" alt="" /></div>
                    </div>

                    <div className="flex flex-col-reverse items-center lg:flex-row lg:mt-52 lg:items-start lg:gap-10">
                        <div className=" lg:-translate-x-10 px-10 flex flex-col items-start justify-center gap-5 mt-16 lg:items-start lg:space-y-10 ">
                            <div data-aos="fade-right" data-aos-duration="1500" className="px-0 md:px-0 lg:px-10"><h1 className='text-5xl text-start font-semibold sm:text-5xl md:text-6xl text-gray-700 lg:text-6xl lg:text-start'>Intuitive Dashboard</h1>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="2000" className="px-0 text-center sm:px-36 sm:-translate-x-36 md:px-0 md:-translate-x-36 lg:-translate-x-0 lg:px-10 lg:text-start "><p className='text-lg text-gray-500 font-semibold lg:text-base text-start'>Navigate and manage payroll with ease. Our dashboard simplifies processes and provides insights at a glance.</p></div>
                            <div data-aos="fade-right" data-aos-duration="2500" className="lg:px-10"><Button text={'Contact Us'} background={'#4050FE'} color={'white'} paddingX={'100'} /></div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className=""><img className='lg:w-[90%]' src="src\assets\images\PPNoRsmfDmzbb8EcPbqGmenSYk.avif" alt="" /></div>
                    </div>

                </section>

                <section>
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center justify-center gap-5 p-5 ">
                        <span className='bg-[#EBF1FF] text-slate-700 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>INNOVATE</span>
                        <div className="px-20 lg:px-60"><h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-blue-600 lg:text-7xl'>Unlock the Future of Payroll</h1></div>
                    </div>

                    <div className="p-10 flex flex-col space-y-5">
                        <div className="space-y-5 flex flex-col lg:space-y-0 lg:flex-row lg:space-x-5  ">
                            <div data-aos="fade-right" data-aos-duration="2500" className="bg-blue-800 rounded-2xl text-center lg:py-20">
                                <div className="flex flex-col items-center justify-center gap-5 p-5 ">
                                    <div className="px-40 lg:px-0 md:px-60"><h1 className='text-4xl text-center font-bold sm:text-5xl md:text-6xl text-white lg:text-5xl'>Quick Integration</h1></div>
                                    <div className="px-10 md:px-28 lg:px-10"><p className='text-white text-base font-normal lg:font-semibold'>Seamlessly integrate with your current HR systems in just a few clicks. No downtime, no hassle.</p></div>
                                    <img className='w-60' src="src\assets\images\8tvdHB3Y6Yok3TCKyyMtL0pF5pQ.avif" alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="2500" className="bg-[#4050FF] rounded-2xl text-center lg:py-20">
                                <div className="flex flex-col items-center justify-center gap-5 p-5 ">
                                    <div className="px-24 lg:px-0 md:px-24 "><h1 className='text-4xl text-center font-bold sm:text-5xl md:text-6xl text-white lg:text-5xl'>Your Pay, Your Say</h1></div>
                                    <div className="px-10 md:px-28 lg:px-10"><p className='text-white text-base font-normal lg:font-semibold'>Employees can ‘dictate’ how they get paid in crypto or traditional currency, the choice is theirs.</p></div>
                                    <img className='w-60' src="src\assets\images\ox8Ie7rz59fqrp7PwINUWhjqCyc.avif" alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay='500' className="bg-blue-500 rounded-2xl text-center lg:py-10 lg:relative">
                            <div className="flex flex-col items-center justify-center gap-5 p-5 ">
                                <div className="px-11 sm:px-0 lg:px-11 md:px-0"><h1 className='text-4xl text-center font-bold sm:text-5xl md:text-6xl text-white lg:text-5xl'>Efficiency and Performance</h1></div>
                                <div className="px-10 md:px-28 lg:px-72"><p className='text-white text-lg font-normal'>Full power, always on. Keep your transactions running smoothly with optimal efficiency.</p></div>
                                <img className='w-60' src="src\assets\images\0EY86FpFGUCJMbJ0GsZFcmgoDw.avif" alt="" />
                            </div>
                            <div className="hidden lg:flex top-[15vh] left-[45vw] absolute md:hidden ">
                                <img className='w-16 left-[40vw] absolute' src="src\assets\images\0EY86FpFGUCJMbJ0GsZFcmgoDw.avif" alt="" />
                                <img className='w-16 translate-y-44 translate-x-[30vw]' src="src\assets\images\0EY86FpFGUCJMbJ0GsZFcmgoDw.avif" alt="" />
                                <img className='w-16 translate-y-44 -translate-x-[30vw]' src="src\assets\images\0EY86FpFGUCJMbJ0GsZFcmgoDw.avif" alt="" />
                                <img className='w-16 -left-[40vw] absolute' src="src\assets\images\0EY86FpFGUCJMbJ0GsZFcmgoDw.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-full  -translate-y-16"><PricingComp /></div>

                <div style={{ height: '100px', width: '100%', position: 'relative' }}>
                    <LogoWall
                        items={secondScroll}
                        direction='horizontal'
                        pauseOnHover={true}
                        size='clamp(8rem, 1rem + 20vmin, 50rem)'
                        duration='60s'
                        bgColor='transparent'
                        bgAccentColor='transparent'
                        color="#4050FF"
                        New='80px'
                        inputH='160px'
                    />
                </div>

                <div className="mt-40 p-10"><Faqs /></div>

                <div className=""><Payroll /></div>

            </section>


        </>
    )
}

export default Home
