import { EventItem } from "../EventItem";

import data from "../../../data/events.json";

const { _embedded: { events } } = data;

interface Props {
  searchTerm: string;
}

export const EventList = ({ searchTerm }: Props) => {

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((event) => {
        return event.name.toLowerCase().includes(searchTerm.toLowerCase())
      });      
    }

    return eventsFiltered.map((event) => (
      <EventItem
        key={`event-item-${event.id}`}
        id={event.id}
        name={event.name}
        info={event?.info || ""}
        image={event.images[0].url}
        onEventClick={handleEventItemClick}
      />
    ))
  }

  const handleEventItemClick = (id: string) => {
    console.log(`Event ${id} clicked`);
  }

  return (
    <div>
      Eventos

      {renderEvents()}
    </div>
  )
}
