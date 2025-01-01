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
  DropdownMenuTrigger,
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
    <div className="sticky top-0 mb-5 border-b border-gray-700 bg-gray-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between self-center">
        <ul className="flex [&>*]:p-4">
          <li className="border-b-2 border-gray-800 hover:border-white hover:bg-gray-700">
            <Link href="/">{t('home')}</Link>
          </li>
          <li className="hover:border-b-2 hover:bg-gray-700">
            <Link href="/about">{t('about')}</Link>
          </li>
        </ul>
        <div className="flex gap-4 px-4">
          <div className="flex items-center justify-center gap-1">
            <Link href={handleLanguageChange('nl')} className="uppercase">
              nl
            </Link>
            |
            <Link href={handleLanguageChange('en')} className="uppercase">
              en
            </Link>
          </div>
          <UserCircle size={32} className="fill-white" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <ShoppingCart size={32} className="fill-white" />
                <div className="absolute bottom-[-12px] left-[12px] inline-flex h-[25px] w-[25px] justify-center rounded-full bg-yellow-900 text-white">
                  {cartItems.length}
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={12}>
              {cartItems.length === 0 ? (
                <div className="p-4 text-center">{cart('noItem')}</div>
              ) : (
                <div className="divide-y divide-gray-300">
                  {cartItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-2"
                    >
                      <span className="line-clamp-1">{item.title}</span>
                      <div className="flex items-center gap-2">
                        <span>x{item.quantity}</span>
                        <Trash size={32} />
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end">
                    <Button className="left-0 m-4 w-fit" title={cart('checkout')} />
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
