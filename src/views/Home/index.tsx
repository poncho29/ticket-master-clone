import { useEffect, useState } from "react";

import { useEvents } from "../../hooks";

import { EventList, Navbar } from "../../components";


export const HomeView = () => {
  const { events, error, isLoading, fetchEvents } = useEvents();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavbarSearch = (search: string) => {
    if (searchTerm !== search) {
      setSearchTerm(search)
      fetchEvents({ name: search });
    } 
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />

      {isLoading ? (
        <div>Cargando...</div>
      ) : events.length > 0 ? (
        <EventList events={events} searchTerm={searchTerm} />
      ) : (
        <div>No hay eventos por la busqueda &quot;{searchTerm}&quot;</div>
      )}

      {error && <div>Error: {error.message}</div>}
    </>
  )
}
