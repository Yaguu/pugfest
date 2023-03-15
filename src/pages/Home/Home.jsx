import React from 'react'
import PugLogo from '../../assets/pugfest.png'
import wppicon from '../../assets/wppicon.png'
import igicon from '../../assets/igicon.png'
import emailicon from '../../assets/emailicon.ico'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.all}>
    <div className={styles.b1}>
    <div className={styles.PugLogo}>
      <img src={PugLogo} className={styles.PugPhoto} />
    </div>
    <div className={styles.title}>
      <h1>Venha conhecer nosso salão de festas e eventos.</h1>  
      <h2>Festas infantis em <span>Pelotas-RS</span></h2>
      <h2>Variedades de brinquedos divertidos para toda a família!</h2>
    </div>
    
    </div>
    <div className={styles.b2}>
      <div className={styles.text}>
        <h1>Clique nos links abaixo e entre em contato para agendar uma visita e fazer seu orçamento!</h1>
      </div>
      <div className={styles.social}>
        <div className={styles.web}>
          <a href="http://wa.me/555381143471">
          <img src={wppicon} alt="" />
          <h2>Whatsapp</h2>
          </a>
        </div>
        <div className={styles.web}>
          <a href="https://www.instagram.com/pugfest.salao/">
          <img src={igicon} alt="" />
          <h2>Instagram</h2>
          </a>
        </div>
        <div className={styles.web}>
         <a href="mailto:pugfestpelotas@hotmail.com">
          <img src={emailicon} alt="" />
          <h2>E-mail</h2>
         </a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home