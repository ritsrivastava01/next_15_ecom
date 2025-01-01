'use client';

import { Heart } from '@phosphor-icons/react/dist/ssr';
import { Button } from './Button';
import { useCartContext } from './CartProvider';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

const ProductCard = ({ title, description, price, image, id }: ProductCardProps) => {
  const { addItem } = useCartContext();
  const handleAddToCart = (id: number) => {
    addItem({ id, title, price, quantity: 1 });
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white p-2 transition-shadow duration-150 hover:shadow-lg">
      <div className="mb-2 line-clamp-1 text-lg font-semibold">{title}</div>
      <div className="flex items-center justify-center [&>img]:h-[240px]">
        {/* <img src={image} alt={title}></img> */}
        <Image src={image} alt={title} width={200} height={200}></Image>
      </div>

      <div className="flex w-full flex-auto flex-col justify-between self-stretch">
        <p className="shrink text-gray-500">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center py-2">${price.toFixed(2)}</span>
          <div className="flex items-center gap-4">
            <Heart size={32} />
            <Button title="Add to cart" onClick={() => handleAddToCart(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
