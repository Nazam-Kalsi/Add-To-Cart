import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className=" w-full border-4 flex justify-between items-center sticky top-0 z-10 bg-white">
      <img
        className="w-24"
        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1704699631~exp=1704700231~hmac=493f392e5d1e3e7644b0dec2f2120d4f837259ad2b6c554a603acdb618594aa8"
        alt=""
      />
      <ul className="flex gap-12 ">
        <li > <NavLink to={"/"} className={({isActive})=>`${(isActive)?'text-red-700':'text-black'} text-black `}> Home </NavLink></li>
        <li > <NavLink className={({isActive})=>`${(isActive)?'text-red-700':'text-black'} text-black `} to={"order"}> Order </NavLink></li>
        <li> <NavLink className={({isActive})=>`${(isActive)?'text-red-700':'text-black'} text-black `} to={"about"} > About </NavLink></li>
        <li> <NavLink className={({isActive})=>`${(isActive)?'text-red-700':'text-black'} text-black `} to={"contact"}> Contact us </NavLink> </li>
        <li> <NavLink className={({isActive})=>`${(isActive)?'text-red-700':'text-black'} text-black `} to={"Cart"}> Cart </NavLink> </li>
      </ul>
      <div className="space-x-8 mr-8">
        <button>Log-in</button>
        <button className="bg-blue-500">Get-Started</button>
      </div>
    </div>
  );
}

export default Header;
