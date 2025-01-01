'use client';
import Link from 'next/link';
import React from 'react';
import { ShoppingCart, UserCircle } from '@phosphor-icons/react/dist/ssr';
import { CartItem, useCartContext } from './CartProvider';

import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './dropDown';
import { useTranslations } from 'next-intl';
import { Trash } from '@phosphor-icons/react';
import { Button } from './Button';

const Header = () => {
  const { cartItems } = useCartContext();
  const t = useTranslations('header');
  const cart = useTranslations('cart');

  const pathName = usePathname();

  const handleLanguageChange = (lang: string) => {
    return pathName.replace(/\/(nl|en)/, `/${lang}`);
  };

  return (
    <div className=' sticky top-0 bg-gray-800 border-b border-gray-700 mb-5 text-white'>
      <div className='max-w-7xl mx-auto flex justify-between self-center items-center '>
        <ul className='flex  [&>*]:p-4'>
          <li className='hover:bg-gray-700 border-b-2 border-gray-800 hover:border-white'>
            <Link href='/'>{t('home')}</Link>
          </li>
          <li className='hover:bg-gray-700 hover:border-b-2'>
            <Link href='/about'>{t('about')}</Link>
          </li>
        </ul>
        <div className='flex gap-4 px-4'>
          <div className='flex justify-center items-center gap-1'>
            <Link href={handleLanguageChange('nl')} className='uppercase'>
              nl
            </Link>
            |
            <Link href={handleLanguageChange('en')} className='uppercase'>
              en
            </Link>
          </div>
          <UserCircle size={32} className='fill-white' />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='relative'>
                <ShoppingCart size={32} className='fill-white' />
                <div className='bg-yellow-900 text-white w-[25px] h-[25px]  justify-center rounded-full absolute bottom-[-12px] left-[12px] inline-flex'>
                  {cartItems.length}
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={12}>
              {cartItems.length === 0 ? (
                <div className='text-center p-4'>{cart('noItem')}</div>
              ) : (
                <div className='divide-y divide-gray-300'>
                  {cartItems.map((item) => (
                    <div
                      key={item.title}
                      className='flex items-center justify-between p-2'>
                      <span className='line-clamp-1'>{item.title}</span>
                      <div className='flex gap-2 items-center'>
                        <span>x{item.quantity}</span>
                        <Trash size={32} />
                      </div>
                    </div>
                  ))}
                  <div className='flex justify-end '>
                    <Button
                      className='w-fit m-4 left-0'
                      title={cart('checkout')}
                    />
                  </div>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
