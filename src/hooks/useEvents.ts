import data from '../data/events.json';

const { _embedded: { events } } = data;

export const useEvents = () => {
  return {
    events
  }
}
