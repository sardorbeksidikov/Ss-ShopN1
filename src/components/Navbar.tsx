import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-gray-800">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt={"logo"} width={80} height={30} />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-400 text-white">
            Home page
          </Link>
          <Link
            href={"/products"}
            className="mr-5 hover:text-blue-400 text-white ">
            All products
          </Link>
        
        </nav>
        <Link href={"/shopping-cart"}>
          <button className="button mr-3 bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-400">
            My bag
          </button>
         
        </Link>
      </div>
    </header>
    // hero////////////////////////////////////
  );
}

export default Navbar