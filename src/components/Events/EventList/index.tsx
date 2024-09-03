import { useNavigate } from "react-router-dom";

import { EventItem } from "../EventItem";

import { Event } from "../../../interfaces";

interface Props {
  events: Event[];
  searchTerm: string;
}

export const EventList = ({ events, searchTerm }: Props) => {
  const navigate = useNavigate();

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
        info={""}
        image={event.images[0].url}
        onEventClick={handleEventItemClick}
      />
    ))
  }

  const handleEventItemClick = (id: string) => {
    navigate(`/detail/${id}`);
  }

  return (
    <div>
      {renderEvents()}
    </div>
  )
}
