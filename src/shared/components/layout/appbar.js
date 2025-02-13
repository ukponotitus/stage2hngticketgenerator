import React from 'react';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';
import thumb from "../../../assets/thumb.png";
import tics from "../../../assets/ticz.png";
import Button from '../common/button';

const appLinks = [
    { title: "Events", path:"/users/events" },
    { title: "My Tickets" },
    { title: "About Project" },
];

export default function Appbar() {

    const handleMyTicketsClick = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("currentStep", "3"); 
        }
    };
    return (
        <nav className="flex items-center gap-5 justify-between px-4 py-3 bg-[#02191D] text-white rounded-3xl mt-6 border border-[#197686] w-full">
            <div className="flex items-center gap-2">
                <Image src={thumb} alt="logothumb" className="w-6 h-6 md:w-auto md:h-auto" />
                <Image src={tics} alt="logtics" className="h-5 md:h-auto" />
            </div>
            <div className="hidden md:flex items-center gap-6">
                {appLinks.map((item, index) => (
                    <p key={index} className="text-gray-400 hover:text-white cursor-pointer font-jeju">
                        {item.title}
                    </p>
                ))}
            </div>
            <Button type="button" variant="tertiary" className='w-full max-w-[170px]' onClick={handleMyTicketsClick}>
                MY TICKETS <HiArrowLongRight />
                </Button>
        </nav>
    );
}

