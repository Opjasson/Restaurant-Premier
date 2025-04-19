import React from 'react'
import { premier } from '../../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-between px-8 w-full">
          <div className="flex items-center">
              <img src={premier} alt="" className="lg:h-24 h-16" />
              <h1 className="lg:text-xl text-base italic">Stock Resto</h1>
          </div>
          <div className="lg:w-36 w-24 flex justify-between">
              <Link className="lg:text-xl text-sm" to={"/"}>HOME</Link>
              <Link className="lg:text-xl text-sm" to={"/stock"}>STOCK</Link>
          </div>
      </nav>
  );
}

export default Navbar
