import React from 'react';
import styles from '../styles/home.module.css';
import backgroundImage from '../assets/vacationImage1.jpg';

// /src/pages/home.jsx
export default function Home() {
    return (
      <main className={styles.homeMain}>
         <div
            className={styles.backgroundHome}
            src={backgroundImage}
            >
            <h1 className={styles.homeTitle}>Nation Lampoon's Vacation!</h1> 
          </div>
          
         
      </main>
      
    );
  };