import styles from './styles.module.css';
import Product from './product';

export default async function Products() {
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  };

  const data = await fetchData();

  return (
    <div>
      <h1 className={styles.main}>Products</h1>
      {data.products.map((product: any) => (
        <Product
          id={product.id}
          key={product.id}
          desc={product.description}
          img={product.thumbnail}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
}
