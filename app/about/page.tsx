import React from 'react';
import Image from 'next/image';
import styles from "../../styles/about.module.css"

export const metadata = {
  title: "About us",
};

const page = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>
      Discover the latest New York Times bestsellers, built with Next.js
      - MJ</h5>
      <Image 
        src="/new-york.gif" 
        alt="New York"
        width={500}
        height={300} 
        className={styles.image} 
      />
    </div>
  );
};

export default page;
