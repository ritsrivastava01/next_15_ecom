'use client';
import Link from 'next/link';
import React from 'react';
import { ShoppingCart, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { useCartContext } from './CartProvider';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Header = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems);

  return (
    <div className=' sticky top-0 bg-gray-800 border-b border-gray-700 mb-5'>
      <div className='max-w-7xl mx-auto flex justify-between self-center items-center '>
        <ul className='flex text-white [&>*]:p-4'>
          <li className='hover:bg-gray-700 border-b-2 border-gray-800 hover:border-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:bg-gray-700 hover:border-b-2'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
        <div className='flex gap-4 px-4'>
          <UserCircle size={32} className='fill-white' />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className='relative'>
                <ShoppingCart size={32} className='fill-white' />
                <div className='bg-yellow-900 text-white w-[25px] h-[25px]  justify-center rounded-full absolute bottom-[-12px] left-[12px] inline-flex'>
                  {cartItems.length}
                </div>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sideOffset={12}>
              <div className='bg-white p-4 rounded-lg shadow-lg  border w-[300px]'>
                {cartItems.length === 0 ? (
                  <div className='text-center'>No items in cart</div>
                ) : (
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className='flex justify-between'>
                        <span className='line-clamp-1'>{item.title}</span>
                        <span>-{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
};

export default Header;
