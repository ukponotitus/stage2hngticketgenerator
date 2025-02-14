import ConferenceTicketLayout from '@/shared/layout';
import React from 'react';

export default function AboutProject() {
  return (
    <ConferenceTicketLayout>
      <section className="max-w-3xl mx-auto p-6 bg-[#041E23] border border-[#0E464F] text-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Event Ticket Booking UI – Open Source Practice Project 🎟️</h2>
        
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-gray-300 mb-4">
          This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone,
          explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, 
          allowing users to book event tickets quickly and efficiently.
        </p>

        <p className="text-gray-300 mb-4">
          The project consists of a three-step ticket booking flow, and developers can extend it further by
          integrating payment solutions, user authentication (optional), and ticket validation systems.
        </p>

        <h3 className="text-lg font-semibold mb-2">Flow & Features</h3>

        <div className="mb-4">
          <h4 className="text-md font-semibold">🎟️ Ticket Selection</h4>
          <ul className="list-disc list-inside text-gray-400">
            <li>Users can browse available tickets (Free & Paid).</li>
            <li>Ticket options are displayed in a list or card view.</li>
            <li>For Free Tickets → Clicking "Get Free Ticket" proceeds to attendee details.</li>
            <li>For Paid Tickets → Clicking "Purchase Ticket" ideally opens a payment modal.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold">👤 Attendee Details Form</h4>
          <ul className="list-disc list-inside text-gray-400">
            <li>Users input their Name, Email, and optional Phone Number.</li>
            <li>Profile picture upload option with preview functionality.</li>
          </ul>
        </div>
      </section>
    </ConferenceTicketLayout>
  );
}
