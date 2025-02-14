import ReadyComponent from '@/shared/components/eventscomponents/readycomponent'
import ConferenceTicketLayout from '@/shared/layout'
import React from 'react'

export default function myticket({handleBookAnotherTicket}) {
  return (
    <ConferenceTicketLayout>
      <ReadyComponent onBookAnotherTicket={handleBookAnotherTicket}/>
    </ConferenceTicketLayout>
  )
}
