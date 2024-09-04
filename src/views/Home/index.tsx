import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";

import { useEvents } from "../../hooks";

import { EventList, Navbar } from "../../components";

import styles from "./Home.module.css";


export const HomeView = () => {
  const { events, page, error, isLoading, fetchEvents } = useEvents();

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

  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log(selected);
    fetchEvents({ name: searchTerm, page: selected });
  }

  const renderEvents = () => {
    if (isLoading) return <div>Cargando...</div>;

    if (error) return <div>Error: {error.message}</div>;

    if (events.length === 0) return <div>No hay eventos por la busqueda &quot;{searchTerm}&quot;</div>;

    return (
      <div>
        <EventList events={events} searchTerm={searchTerm} />

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          className={styles.pagination}
          pageClassName={styles.page}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          activeClassName={styles.pageActive}
          disabledClassName={styles.pageDisabled}
          pageRangeDisplayed={5}
          pageCount={page?.totalPages || 0}
          onPageChange={handlePageChange}
        />
      </div>
    )
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />

      {renderEvents()}
    </>
  )
}
