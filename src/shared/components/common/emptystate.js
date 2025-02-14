import Button from "./button";

export default function EmptyState({ handleBookAnotherTicket }) {
  return (
    <div className="rounded-3xl px-4 sm:px-6 md:px-12 py-6 border border-[#0E464F] shadow-lg w-full max-w-full mx-auto text-white text-center">
      <h3 className="text-white font-jeju text-[1.5rem] md:text-[2.5rem] mb-4">No Tickets Booked</h3>
      <p className="text-gray-300 font-roboto text-[1rem] mb-8">
        You haven't booked any tickets for Techember Fest '25 yet. Don't miss out on this amazing event!
      </p>
      <Button onClick={handleBookAnotherTicket}>Book a Ticket</Button>
    </div>
  )
}

