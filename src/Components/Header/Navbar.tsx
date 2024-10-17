import Link from 'next/link';
import React from 'react';
import ToggleButton from '@/Components/Header/ToggleButton';
import fav from '@/Images/favicon.png';
import Image from 'next/image';

const listStyle =
  'mx-1 p-1 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white rounded-md duration-300';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-1 px-4">
      {/* back to page */}
      {/* title */}
      <Link href="/" className="flex items-center font-bold">
        <Image
          src={fav}
          alt="favicon"
          width={25}
          height={25}
          className="mr-2"
        />
        Ryan Coin
      </Link>
      {/* links */}
      <ul className="flex items-center">
        <li className={listStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={listStyle}>
          <Link href="/search">Search</Link>
        </li>
      </ul>
      {/* theme toggle */}
      <ToggleButton />
    </header>
  );
}
