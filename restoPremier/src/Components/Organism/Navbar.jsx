import React from 'react'
import { premier } from '../../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-between px-8">
          <div className="flex items-center">
              <img src={premier} alt="" className="h-24" />
              <h1 className="text-xl italic">Stock Resto</h1>
          </div>
          <div className="w-36 flex justify-between">
              <Link to={"/"}>HOME</Link>
              <Link to={"/stock"}>STOCK</Link>
          </div>
      </nav>
  );
}

export default Navbar
