import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiArrowLongRight } from 'react-icons/hi2';
import thumb from "../../../assets/thumb.png";
import tics from "../../../assets/ticz.png";
import Button from '../common/button';
import Link from 'next/link';

const appLinks = [
    { title: "Events", path: "/" },
    { title: "My Tickets", path: "/myticket" },
    { title: "About Project", path: "/aboutproject" },
];

export default function Appbar() {
    const router = useRouter();

    const handleMyTicketsClick = () => {
        router.push("/myticket")
    };

    return (
        <nav className="flex items-center gap-5 justify-between px-4 py-3 bg-[#02191D] text-white rounded-3xl mt-6 border border-[#197686] w-full">
            <Link href={"/"}>
            <div className="flex items-center gap-2">
                <Image src={thumb} alt="logothumb" className="w-8 h-8 " />
                <Image src={tics} alt="logtics" className="h-5 " />
            </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
                {appLinks.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.path}
                        className={`cursor-pointer font-jeju text-[18px] ${
                            router.pathname === item.path ? "text-white font-bold" : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <Button type="button" variant="tertiary" className='w-full max-w-[170px] text-[1rem]' onClick={handleMyTicketsClick}>
                MY TICKETS <HiArrowLongRight />
            </Button>
        </nav>
    );
}
