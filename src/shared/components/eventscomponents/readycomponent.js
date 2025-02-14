import { useRef } from "react"
import Image from "next/image"
import html2canvas from "html2canvas"
import Button from "../common/button"
import { useStoredData } from "@/core/services"
import userDefault from "../../../assets/User.img.png"
import barcode from "../../../assets/Bar Code.png"
import ticket from "../../../assets/TICKET.png"

export default function ReadyComponent({ onBookAnotherTicket }) {
  const { storedData } = useStoredData()
  const { profilePhoto } = useStoredData()
  const ticketRef = useRef(null)

  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true,
      })
      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = "techember-fest-ticket.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error capturing ticket:", error)
    }
  }

  return (
    <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full text-white">
      <div className="rounded-lg shadow flex-1 mt-6"
      ref={ticketRef}>
        <div className="flex justify-between">
          <h3 className="font-bold text-white font-jeju text-[1rem] md:text-[2rem]">Ready</h3>
          <p className="text-sm text-gray-300 font-roboto text-[1rem] mt-2">Step 3/3</p>
        </div>
        <div className="relative w-full bg-[#0E464F] rounded-full h-1 mt-2">
          <div className="bg-[#24A0B5] h-1 rounded-full" style={{ width: "60%" }}></div>
        </div>
      </div>
      <div className='text-center pt-8 pb-12'>
        <h3 className='md:text-[2rem] text-[1rem] font-bold '>Your Ticket is Booked!</h3>
        <p className='md:text-[1rem] text-[0.65rem] pt-5'>Check your email for a copy or you can download</p>
      </div>
      <div className="relative mx-auto max-w-sm ">
        <div className="relative flex flex-col max-h-auto ">
          <Image src={ticket} alt="Background Ticket" className="w-full object-cover" />
          <div className='absolute border border-[#24A0B5]  shadow-lg w-[90%] max-h-[400px]  sm:max-h-[500px] overflow-y-scroll mx-auto inset-x-4 mt-5 sm:mt-16 md:mt-16 text-white rounded-xl p-3'>
            <div className="w-full text-center">
              <h2 className="md:text-[40px] font-roadRage">Techember Fest '25</h2>
              <p className="mt-2 text-[1rem] font-roboto text-gray-300">📍 04 Rumens road, Ikoyi, Lagos </p>
              <p className=" text-[1rem] font-roboto text-gray-300">
                📅 March 15, 2025 | 7:00 PM
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-4 mt-3 overflow-scroll">
              <div className="flex justify-center">
                <Image
                  src={profilePhoto || userDefault}
                  alt="profile"
                  width={150}
                  height={300}
                  className="border border-[#24A0B5]"
                />
              </div>
              {storedData &&
                storedData.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-[#24A0B5] m-2">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <label className="text-gray-400">Enter your name</label>
                        <p className="font-medium">{item.full_name}</p>
                      </div>
                      <div>
                        <label className="text-gray-400">Enter your email</label>
                        <p className="font-medium text-[]">{item.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                      <div>
                        <label className="text-gray-400">Ticket Type</label>
                        <p className="font-medium">{item.ticketType}</p>
                      </div>
                      <div>
                        <label className="text-gray-400">Ticket for</label>
                        <p className="font-medium">{item.numbers_of_tickets}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-0  flex flex-row justify-center w-full  ">
            <Image src={barcode} alt="Barcode" width={320} height={40} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
        <Button type="button" variant="secondary" onClick={onBookAnotherTicket} className="text-sm">
          Book Another Ticket
        </Button>
        <Button type="button" className="text-sm" onClick={handleDownloadTicket}>
          Download Ticket
        </Button>
      </div>
    </div>
  )
}

