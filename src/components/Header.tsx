import Link from 'next/link';
import React from 'react';
import { ShoppingCart, UserCircle } from '@phosphor-icons/react/dist/ssr';

const Header: React.FC = () => {
  return (
    <div className=' bg-gray-800 border-b border-gray-700 mb-5'>
      <div className='max-w-7xl mx-auto flex justify-between self-center items-center '>
        <ul className='flex text-white [&>*]:p-4 '>
          <li className='hover:bg-gray-700 border-b-2 border-gray-800 hover:border-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:bg-gray-700 hover:border-b-2'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
        <div className='flex gap-4'>
          <UserCircle size={32} className='fill-white' />
          <ShoppingCart size={32} className='fill-white' />
        </div>
      </div>
    </div>
  );
};

export default Header;
