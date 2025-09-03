import React from "react";
import Container from "./Container";
import logo from "../assets/logo.webp";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";


const Navbar = () => {
  
  return (
    <div className="border-b-[1px] border-[#767676] bg-slate-700 ">
      <Container className="flex py-[16px] items-center">
        <div className="w-[20%]">
          <img src={logo} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="w-[40%]">
          <ul className="flex font-Poppins font-normal text-[14px] text-black gap-[48px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop ">list</Link></li>
            <li>About</li>
            
          </ul>
        </div>
        <div className="w-[40%] flex gap-12 justify-end items-center ">
            <div className="relative flex items-center  w-[243px] bg-[#f5f5f5]">
                
                <input 
                type="text" 
                placeholder="What are you looking for?"
                className="bg-[#f5f5f5] py-3 px-5  border-none outline-none w-[243px]font-Poppins 
                font-normal  placeholder:text-[12px] placeholder:text-[#767676]" />
                <div className="absolute top-[40%] right-0 text-xl">
                    <IoSearch />
                </div>
                
            </div>
            <div className="flex gap-3 ">
                  <CiHeart className="text-xl" />
                  <div className="relative">
                     <Link to="/card"> <IoCartOutline className="text-xl" /></Link>
                     <div className="absolute top-[-16px] left-[17px] text-red-600 font-bold text-xl"></div>
                  </div>
                </div>
            
        </div>
      </Container>
    </div>
  );
};

export default Navbar;