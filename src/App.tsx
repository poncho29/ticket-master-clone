import { useState } from 'react';

import { EventList, Navbar } from './components';

import './App.css';

function App() {
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

export default App
