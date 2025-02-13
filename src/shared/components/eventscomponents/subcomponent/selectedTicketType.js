import React, { useEffect } from 'react';

const ticketOptions = [
  { type: "REGULAR ACCESS", price: "Free", slots: "20/52" },
  { type: "VIP ACCESS", price: "$50", slots: "20/52" },
  { type: "VVIP ACCESS", price: "$150", slots: "20/52" },
];

export default function SelectTicketTypeComponent({ handleChange, formData, setUserFormData }) {
  useEffect(() => {
    if (!formData.ticketType) {
      setUserFormData((prev) => ({ ...prev, ticketType: "REGULAR ACCESS" }));
    }
  }, [formData.ticketType, setUserFormData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#0E464F] gap-4 mt-2 p-5">
      {ticketOptions.map((ticket, index) => {
        const isSelected = formData.ticketType === ticket.type;
        return (
          <div
            onClick={() => {
              handleChange({ target: { name: "ticketType", value: ticket.type } });
            }}
            key={index}
            className={`rounded-lg cursor-pointer flex flex-col justify-between gap-3 p-[5px] w-full font-roboto 
              border border-[#0E464F] 
              ${isSelected ? "bg-[#24A0B5] text-white" : "bg-transparent"} 
              hover:bg-[#103c44] focus:bg-[#24A0B5] transition-colors duration-300
              ${index === 0 ? "bg-[#197686]" : "border-[#0E464F] border"}`}
          >
            <div className='flex flex-col gap-2'>
              <p className="text-lg font-bold">{ticket.price}</p>
              <div>
                <p className="text-[1rem]">{ticket.type}</p>
                <p className="text-sm">{ticket.slots}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
