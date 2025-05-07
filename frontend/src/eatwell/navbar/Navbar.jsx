import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <a href='/' className={styles.logo}>EatWell</a>
          <div className={styles.pages}>
            <a className={styles.active} href="/">HOME</a>
            <a href="">ABOUT</a>
            <a href="">OFFER</a>
            <a href="">MENU</a>
            <a href="dashboard">DASHBOARD</a>
            <a href="basket">BASKET</a>
            <a href="wishlist">WISHLIST</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar