import { useState } from 'react';

import { EventsResponse, Event, Page } from '../interfaces';

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = 'https://app.ticketmaster.com/discovery/v2/events.json';

type TParamsEvents = {
  countryCode?: string;
  name?: string;
  page?: number | undefined;
}

export const useEvents = () => {
  const [data, setData] = useState<Event[]>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async (params: TParamsEvents = {}) => {
    const { countryCode = 'MEX', name = '', page } = params;

    let url = `${URL_BASE}?apikey=${API_KEY}&countryCode=${countryCode}`;

    if (name) url += `&keyword=${name}`;

    if (page) url += `&page=${page}`;
    
    try {
      const response = await fetch(url);
      const data: EventsResponse = await response.json();

      setData(data?._embedded?.events || []);
      setPage(data?.page || null);
    } catch (error: unknown) {
      console.log('Error:', error);
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("Unknown error occurred"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    events: data,
    page,
    error,
    isLoading,
    fetchEvents
  }
}
