import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../common/button";
import SelectTicketTypeComponent from "./subcomponent/selectedTicketType";

export default function TicketSelection({
  setSteps,
  handleChange,
  formData,
  handleSubmit,
  setUserFormData,
  handleCancel,
}) {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    let newErrors = {};

    if (!formData?.ticketType) {
      newErrors.ticketType = "Please select a ticket type before proceeding.";
    }

    if (!formData?.numbers_of_tickets) {
      newErrors.numbers_of_tickets = "Please select the number of tickets.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSteps(2);
  };

  return (
    <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full mx-auto text-white">
      <ToastContainer />
      <div className="flex justify-between">
        <h3 className=" text-white font-jeju text-[1rem] md:text-[2rem]">
          Ticket Selection
        </h3>
        <p className="text-sm text-gray-300 font-roboto text-[1rem] mt-2">
          Step 1/3
        </p>
      </div>
      <div className="relative w-full bg-[#0E464F] rounded-full h-1 mt-2">
        <div className="bg-[#24A0B5] h-1 rounded-full" style={{ width: "40%" }}></div>
      </div>
      <div className="bg-gradient-to-r from-[#24A0B5]/10 to-[#24A0B5]/0 border
       border-[#0E464F] p-4 rounded-2xl mt-8 text-center font-jeju ">
        <h2 className="md:text-[60px] font-roadRage">Techember Fest '25</h2>
        <p className="text-gray-300 font-roboto text-[1rem] mx-auto max-w-[280px]">
          Join us for an unforgettable experience at [Event Name]! Secure your spot now.
        </p>
        <p className="mt-2 text-[1rem] font-roboto text-gray-300 mb-3">
          📍 [Event Location] <span className="px-1"> | |</span> March 15, 2025 | 7:00 PM
        </p>
      </div>
      <hr className="h-1 w-full bg-[#07373F] border border-[#07373F] my-8" />
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="text-[1rem] font-semibold font-roboto ">Select Ticket Type:</h3>
          <SelectTicketTypeComponent
              handleChange={(type) => handleChange(type)}
              formData={formData}
              setUserFormData={setUserFormData}
            />
            {errors.ticketType && (
              <p className="text-red-500 text-sm mt-1">{errors.ticketType}</p>
            )}
            </div>
        <div className="mt-6 relative">
          <label className="text-lg font-semibold block">Number of Tickets</label>
          <select
            name="numbers_of_tickets"
            value={formData?.numbers_of_tickets || ""}
            onChange={handleChange}
            className="w-full rounded-md py-2 px-3 pr-10 border border-[#0E464F] bg-[#041E23] focus:outline-none"
          >
            <option>select</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          {errors.numbers_of_tickets && (
            <p className="text-red-500 text-sm mt-1">{errors.numbers_of_tickets}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between mt-6 border border-[#0E464F] px-4 py-10 sm:px-6 md:px-12 md:rounded-full">
          <Button variant="secondary" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleNext} type="button">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
