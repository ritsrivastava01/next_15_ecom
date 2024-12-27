import React from 'react';
import ProductCard from 'rit/components/ProductCard';

const HomePage: React.FC = async () => {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
