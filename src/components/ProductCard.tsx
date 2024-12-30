/* eslint-disable @next/next/no-img-element */
'use client';

import { Heart } from '@phosphor-icons/react/dist/ssr';
import { Button } from './Button';
import { useCartContext } from './CartProvider';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

const ProductCard = ({
  title,
  description,
  price,
  image,
  id
}: ProductCardProps) => {
  const { addItem } = useCartContext();
  const handleAddToCart = (id: number) =>
    addItem({ id, title, price, quantity: 1 });

  return (
    <div className='bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-150 p-2 flex flex-col border'>
      <div className='text-lg font-semibold mb-2 line-clamp-1'>{title}</div>
      <div className='flex items-center justify-center [&>img]:h-[240px]'>
        <img src={image} alt={title}></img>
      </div>

      <div className='flex flex-auto flex-col justify-between self-stretch w-full'>
        <p className='text-gray-500 shrink'>{description}</p>
        <div className='flex justify-between items-center'>
          <span className='flex items-center py-2'>${price.toFixed(2)}</span>
          <div className='flex gap-4 items-center '>
            <Heart size={32} />
            <Button title='Add to cart' onClick={() => handleAddToCart(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
