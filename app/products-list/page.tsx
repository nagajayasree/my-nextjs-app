import styles from './page.module.css';

const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export default async function Products() {
  const data = await fetchData();
  console.log(data.products);
  return (
    <div>
      <h1 className={styles.main}>Products</h1>
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
    </div>
  );
}
