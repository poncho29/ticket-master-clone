import { MouseEvent } from "react";

import styles from './EventItem.module.css';

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
    <div className={styles.eventItemContainer}>
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
        className={styles.eventImage}
      />

      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button
          className={styles.seeMoreBtn}
          onClick={handleSeeMoreClick}
        >
          Ver más
        </button>
      </div>
    </div>
  )
}
