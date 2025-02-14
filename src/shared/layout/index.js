import Appbar from "../components/layout/appbar";


export default function ConferenceTicketLayout({ children, setSteps  }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#041E23] lg:px-28 pb-10 sm:px-10">
      <Appbar setSteps={setSteps} />
      <div className="flex justify-center items-center text-white mt-12 lg:mx-36">
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}


