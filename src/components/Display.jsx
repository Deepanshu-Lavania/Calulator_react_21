import React from 'react'
import styles from '../components/Display.module.css';

export default function Display({DisplayVal}) {
  return (
   <>
   <input type="text" className={styles.display} value={DisplayVal} readOnly/>
   </>
  )
}
