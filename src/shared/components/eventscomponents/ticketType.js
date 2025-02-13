import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from '../common/button';
import SelectTicketTypeComponent from "./subcomponent/selectedTicketType";
// import SelectTicketTypeComponent from "./subcomponent/selectTicketType";

export default function TicketSelection({
  setSteps,
  handleChange,
  formData,
  handleSubmit,
  setUserFormData,
  handleCancel,
}) {
  const handleNext = () => {
    if (!formData?.ticketType) {
      toast.error("Please select a ticket type before proceeding!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!formData?.numbers_of_tickets) {
      toast.error("Please select the number of tickets!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setSteps(2);
  };

  return (
    <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 pt-5 border border-[#0E464F] shadow-lg w-full max-w-full mx-auto text-white">
      <ToastContainer />
      <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full text-white">
        <div className="rounded-lg shadow flex-1 mt-6">
          <div className="flex justify-between">
            <h3 className="font-bold text-white font-jeju text-[1rem] md:text-[2rem]">Ticket Selection</h3>
            <p className="text-sm text-gray-300 font-roboto text-[1rem] mt-2">Step 1/3</p>
          </div>
          <div className="relative w-full bg-[#0E464F] rounded-full h-1 mt-2">
            <div className="bg-[#24A0B5] h-1 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#24A0B5]/10 to-[#24A0B5]/0 border border-[#0E464F] p-4 rounded-2xl mt-8 text-center font-jeju w-full max-w-full">
          <div className="w-full p-2">
            <h2 className="md:text-[60px] font-roadRage">Techember Fest '25</h2>
            <p className="text-gray-300 font-roboto text-[1rem] w-full max-w-[280px] mx-auto">
              Join us for an unforgettable experience at [Event Name]! Secure your spot now.
            </p>
            <p className="mt-2 text-[1rem] font-roboto text-gray-300">
              📍 [Event Location] <span className="px-1 text-gray-300"> | |</span> March 15, 2025 | 7:00 PM
            </p>
          </div>
        </div>
        <hr className="h-1 w-full bg-[#07373F] border border-[#07373F] my-8" />
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="text-[1rem] font-semibold">Select Ticket Type:</h3>
            <SelectTicketTypeComponent
              handleChange={(type) => handleChange(type)}
              formData={formData}
              setUserFormData={setUserFormData}
            />
          </div>
          <div className="mt-6 relative w-full">
            <label className="text-lg font-semibold block">Number of Tickets</label>
            <select
              name="numbers_of_tickets"
              value={formData?.numbers_of_tickets}
              onChange={handleChange}
              className="w-full appearance-none rounded-md py-2 px-3 pr-10 mb-7 border border-[#0E464F] bg-[#041E23] placeholder-white focus:outline-none"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 justify-center right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 border border-[#0E464F] px-4 py-10 sm:px-6 md:px-12 md:rounded-full w-full">
            <Button variant="secondary" type="button" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleNext} type="button">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
