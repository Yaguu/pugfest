import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Salão Pug <span>Fest</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>

        <li>
        <NavLink to="/photos" className={({ isActive }) => (isActive ? styles.active : "")}>
            Fotos
          </NavLink>
        </li>
  
      </ul>
    </nav>
    </div>
  )
}

export default Navbar