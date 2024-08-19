import { MouseEvent } from "react";

interface Props {
  id: string;
  name: string;
  info: string;
  image: string;
  onEventClick: (id: string) => void;
}

export const EventItem = ({ id, name, info, image, onEventClick }: Props) => {
  const handleSeeMoreClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onEventClick(id)
  }
  
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  )
}
