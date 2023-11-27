import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <Link className="my-5 bg-red-500" href="/about">
        About
      </Link>
      <Link className="mx-5 bg-green-500" href="/contact">
        contact
      </Link>
      <Link className="mx-5 bg-blue-500" href="/product/mango">
        Product
      </Link>
      <br />
    </>
  );
}

export default Navbar ;