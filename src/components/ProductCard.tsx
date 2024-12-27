import React from 'react';

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
    <div className='bg-white  rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-150 p-2'>
      <div className='text-lg font-semibold mb-2 line-clamp-1'>{title}</div>
      <div className='flex items-center justify-center [&>img]:h-[240px]'>
        <img src={image} alt='Card Image'></img>
      </div>
      <p className='text-gray-500'>{description}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
