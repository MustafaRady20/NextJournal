import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy; Myapp . All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" alt='social image' className={styles.icon} width={15} height={15}/>
        <Image src="/2.png" alt='social image' className={styles.icon} width={15} height={15}/>
        <Image src="/3.png" alt='social image' className={styles.icon} width={15} height={15}/>
        <Image src="/4.png" alt='social image' className={styles.icon} width={15} height={15}/>

      </div>
    </div>
  )
}

export default Footer