import Image from 'next/image';

interface ProductProps {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
}

export default async function Product(props: ProductProps) {
  return (
    <div>
      <Image src={props.img} alt={props.title} width={200} height={200} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>{props.price}</p>
    </div>
  );
}
