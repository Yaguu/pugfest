import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>📍Pelotas, Rua Almirante Barroso, 2537</h2>
      <h2>📞 (53) 99154-2488</h2>
      <h3>Criar histórias é o nosso negócio!</h3>
      <p>Pug Fest &copy; 2023</p>
    </footer>
  )
}

export default Footer