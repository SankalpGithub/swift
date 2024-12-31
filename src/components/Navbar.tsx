import Link from "next/link";
import Image from "next/image";
import React from "react";
import cartIcon from "../../public/cartIcon.png";
import profileIcon from "../../public/profileIcon.png";
import navIcon from '../../public/navIcon.png'

const Navbar = () => {
  return (

    //navbar bg
    <div className="navbar w-full h-24 bg-primaryWhite flex justify-center items-center mb-6">

      {/* <div> 
        <button>
          <Image src={navIcon} alt="navIcon"/>
        </button>
      </div> */}

      {/* logo */}
      <div>
        <h1 className="headingText font-bold text-4xl mx-10">SWIFT</h1>
      </div>

      {/* links  */}
      {/* <div> */}
      <div>
        <p>Shop</p>
      </div>
      <Link href="#" className="m-4">
        On Sale
      </Link>
      <Link href="#" className="m-4">
        New Arrivals
      </Link>
      <Link href="#" className="m-4">
        brands
      </Link>
      {/* </div> */}

      {/* search box */}
      <div className="searchBox m-4 bg-searchGrey w-2/5 h-1/2 rounded-full flex items-center py-5">
        <input
          placeholder="Search"
          className="w-full bg-transparent decoration-transparent mx-3 focus:outline-none"
        />
      </div>

      {/* cart */}
      <div className="cart m-4">
        <button>
          <Image src={cartIcon} alt="cartIcon" />
        </button>
      </div>

      {/* profile */}
      <div className="profile m-4">
        <button>
          <Image src={profileIcon} alt="profileIcon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
