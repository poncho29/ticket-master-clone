import { useState } from "react";

import { EventList, Navbar } from "../../components"


export const HomeView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (search: string) => {
    console.log(`Navbar search: ${search}`)
    searchTerm !== search && setSearchTerm(search)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />

      <EventList searchTerm={searchTerm} />
    </>
  )
}
