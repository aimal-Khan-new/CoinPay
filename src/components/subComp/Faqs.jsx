import { useState } from "react";

const faqs = [
    {
        question: "Can I pay international employees in different currencies?",
        answer: "Yes, our platform allows you to pay employees across the globe in various cryptocurrencies or in their local fiat currency. We support multiple currencies and provide real-time conversion rates for seamless payments."
    },
    {
        question: "Is crypto payroll compliant with current regulations?",
        answer: "Absolutely. We stay up-to-date with the latest legal requirements for cryptocurrency transactions. Our platform ensures compliance with international labor and tax regulations, offering transparent reporting for your accounting needs."
    },
    {
        question: "How secure is crypto payroll compared to traditional methods?",
        answer: "Crypto payroll is highly secure due to the decentralized nature of blockchain technology. Each transaction is encrypted and verified, reducing the risk of fraud. We also implement advanced security measures like two-factor authentication (2FA) and multi-signature wallets for added protection."
    },
    {
        question: "Can my employees choose between crypto and fiat currency?",
        answer: "Yes, our platform gives employees the flexibility to receive their salary in cryptocurrencies or traditional currencies. They can easily switch their preference in the employee dashboard at any time."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div data-aos="zoom-in" data-aos-duration='2000' data-aos-delay='100'  className="bg-[#4050FF] text-white p-6 rounded-2xl mt-10 py-20 space-y-12">
            <div className="flex flex-col items-center justify-center gap-5 p-5 ">
                <span className='bg-white text-blue-600 font-medium uppercase border-[1px] border-gray-200 rounded-full py-1 px-4 text-sm'>FEATURES</span>
                <div className="lg:px-48"><h1 className='text-4xl text-center font-semibold sm:text-5xl md:text-6xl text-white lg:text-6xl'>We've all the answers</h1></div>
            </div>
                <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-transparent p-4 px-20 ">
                        <button
                            className="w-full flex flex-col justify-between items-start  font-medium text-lg border-b-[1px] border-gray-50 py-3 space-y-5 "
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex items-center justify-between w-full text-start text-base sm:text-lg">{faq.question}
                            {openIndex === index ? <img className={`w-5 transition-all duration-200 ease-in-out ${'rotate-45'}`} src="src\assets\images\plus.png" alt="" /> : <img className={`w-5`} src="src\assets\images\plus.png" />}</div>
                            <div
                            className={`transition-all duration-300 overflow-hidden  ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="mt-2 text-white text-start sm:text-base">{faq.answer}</p>
                        </div>
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
