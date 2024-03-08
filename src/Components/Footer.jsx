import React from "react";

function Footer() {
  return (
    <footer className="border-4 flex items-center justify-around w-full ">
      <img
        className="w-1/6"
        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1704699631~exp=1704700231~hmac=493f392e5d1e3e7644b0dec2f2120d4f837259ad2b6c554a603acdb618594aa8"
        alt=""
      />
      <div className="space-y-6">
        <p className="text-2xl font-bold font-sans ">Sign-up now</p>
      <ul className="text-center space-y-2 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
