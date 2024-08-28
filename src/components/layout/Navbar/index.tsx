import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

import styles from './Navbar.module.css';

interface Props {
  onSearch: (search: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') onSearch('');

    setSearch(value);
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch(search);
  }

  return (
    <div className={styles.searchContainer}>
      <p>Eventos</p>

      <input
        type="search"
        placeholder='Busca un evento'
        className={styles.searchInput}
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}
