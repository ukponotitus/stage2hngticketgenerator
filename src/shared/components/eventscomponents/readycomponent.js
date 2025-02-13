import React from 'react';
import Button from '../common/button';
import { useStoredData } from '@/core/services';
// import { useStoredData } from '@/core/services/users';
import ticket from "../../../assets/TICKET.png";
import user from "../../../assets/User.img.png";
import barcode from "../../../assets/Bar Code.png";
import Image from 'next/image';

export default function ReadyComponent({ onBookAnotherTicket }) {
    const storedData = useStoredData();
    return (
        <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full text-white">
            <div className="rounded-lg shadow flex-1 mt-6">
                <div className="flex justify-between">
                    <h3 className="font-bold text-white font-jeju text-[1rem] md:text-[2rem]">Ready</h3>
                    <p className="text-sm text-gray-300 font-roboto text-[1rem] mt-2">Step 3/3</p>
                </div>
                <div className="relative w-full bg-[#0E464F] rounded-full h-1 mt-2">
                    <div className="bg-[#24A0B5] h-1 rounded-full" style={{ width: "60%" }}></div>
                </div>
            </div>
            <div className='text-center pt-8 pb-10'>
                <h3 className='md:text-[2rem] text-[1rem] font-bold '>Your Ticket is Booked!</h3>
                <p className='md:text-[1rem] text-[0.65rem] pt-5'>Check your email for a copy or you can download</p>
            </div>
            <div className="relative mx-auto max-w-sm ">
                <div className="relative flex flex-col ">
                    <Image src={ticket} alt="Background Ticket" className="relative object-contain" />
                    <div className='absolute border border-[#24A0B5] shadow-lg w-full max-w-[280px] mt-7 text-white rounded-xl p-3'>
                        <div className="w-full text-center">
                            <h2 className="md:text-[40px] font-roadRage">Techember Fest '25</h2>
                            <p className="mt-2 text-[1rem] font-roboto text-gray-300">📍 [Event Location] <span className="px-1 text-gray-300"> | |</span> March 15, 2025 | 7:00 PM</p>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-4 mt-3">
                            <div>
                                <Image src={user} alt="profile" className="2xl:w-20 2xl:h-20" />
                            </div>
                            {storedData.map((item, index) => (
                                <div key={index} className="border border-[#0E464F] rounded-lg flex flex-col gap-2">
                                    <div className='p-3'>
                                        <div className='flex flex-row gap-2 justify-between '>
                                            <div className='w-full'>
                                                <p className="text-xs ">Enter User Name</p>
                                                <p className="text-xs ">{item.full_name}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs ">Enter Your Email</label>
                                                <p className="text-xs ">{item.email}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-between'>
                                            <div>
                                                <label className="text-xs ">Ticket Type:</label>
                                                <p className="text-xs ">{item.ticketType}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs">Ticket for:</label>
                                                <p className="text-xs ">{item.numbers_of_tickets}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute md:mt-[33rem] mt-[31rem] flex flex-row justify-center w-full max-w-[300px] items-center ">
                        <Image src={barcode} alt="Barcode" width={170} height={40} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 md:rounded-full w-full pb-5">
                <Button type='button' variant="secondary" onClick={onBookAnotherTicket}>Book Another Ticket</Button>
                <Button type="submit">Download Ticket</Button>
            </div>
        </div>
    );
}
