"use client";

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { navLinks } from '@/constants';
import { logo, menu, close } from '@/public/assets';
import Image from 'next/image';

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className='paddingX w-full flex items-center py-5 fixed 
      top-0 z-20 bg-primary'
    >
      <div className='w-full flex justify-between items-center 
      max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <Image
            src={logo}
            alt='logo'
            width={36}
            height={36}
            className='object-contar'
          />
          <p className='text-white text-[18px] font-bold
          cursor-pointer'>
            Josias <span className='sm:block hidden'>| Abraão</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li 
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-lg font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            width={28}
            height={28}
            className='object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map(link => (
                <li 
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar