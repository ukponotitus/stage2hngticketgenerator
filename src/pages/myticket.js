import { useEffect, useState } from "react"
import ReadyComponent from "@/shared/components/eventscomponents/readycomponent"
import ConferenceTicketLayout from "@/shared/layout"
import { useStoredData } from "@/core/services"
import EmptyState from "@/shared/components/common/emptystate"

export default function MyTicket({ handleBookAnotherTicket }) {
  const [hasTicket, setHasTicket] = useState(false)
  const { storedData } = useStoredData()

  useEffect(() => {
    setHasTicket(storedData && storedData.length > 0)
  }, [storedData])

  return (
    <ConferenceTicketLayout>
      {hasTicket ? (
        <ReadyComponent onBookAnotherTicket={handleBookAnotherTicket} />
      ) : (
        <EmptyState onBookAnotherTicket={handleBookAnotherTicket} />
      )}
    </ConferenceTicketLayout>
  )
}

