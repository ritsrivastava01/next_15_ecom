import { getTranslations } from 'next-intl/server';
import React from 'react';
import ProductCard, { ProductCardProps } from 'rit/components/ProductCard';

const HomePage: React.FC = async () => {
  const products = await fetch('https://fakestoreapi.com/products?limit=5', {
    cache: 'no-cache',
  }).then((res) => res.json());

  const t = await getTranslations('home');

  return (
    <div>
      <h1>{t('title')}</h1>
      <span>{t('description')}</span>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: ProductCardProps) => (
          <ProductCard key={product.id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
