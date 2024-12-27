/* eslint-disable @next/next/no-img-element */
'use client';

import { Heart } from '@phosphor-icons/react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({
  title,
  description,
  price,
  image
}: ProductCardProps) => {
  return (
    <div className='bg-white  rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-150 p-2 flex flex-col'>
      <div className='text-lg font-semibold mb-2 line-clamp-1'>{title}</div>
      <div className='flex items-center justify-center [&>img]:h-[240px]'>
        <img src={image} alt={title}></img>
      </div>

      <div className='flex flex-auto flex-col justify-between  self-stretch w-full'>
        <p className='text-gray-500 shrink'>{description}</p>
        <div className='flex justify-between items-center'>
          <span className='flex items-center py-2'>${price.toFixed(2)}</span>
          <div className='flex gap-4 items-center '>
            <Heart size={32} />
            <button
              className='bg-gray-800   hover:bg-gray-600 text-white  py-2 px-4 rounded-lg'
              onClick={() => {
                console.log('add');
              }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
