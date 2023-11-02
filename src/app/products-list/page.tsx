'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function ProductsList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };
    fetchData().catch((e) => {
      console.error('An error occurred while fetching the data: ', e);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className={styles.main}>Products</h1>
    </div>
  );
}
