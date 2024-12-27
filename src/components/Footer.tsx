// components/Footer.tsx

import Link from 'next/link';

const Footer = () => (
  <div className={`bg-gray-800 text-white py-6  px-4`}>
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
      <div className='mb-4 md:mb-0'>
        <h2 className='text-lg font-semibold'>Company</h2>
        <ul className='mt-4 space-y-2'>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/team'>Team</Link>
          </li>
          <li>
            <Link href='/careers'>Careers</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='mb-4 md:mb-0'>
        <h2 className='text-lg font-semibold'>Legal</h2>
        <ul className='mt-4 space-y-2'>
          <li>
            <Link href='/terms'>Terms of Service</Link>
          </li>
          <li>
            <Link href='/privacy'>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
