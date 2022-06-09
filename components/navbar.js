import { React, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <div className="w-full h-16  mx-auto rounded-lg bg-slate-400 shadow-lg">
      <div className="flex flex-row gap-2 items-center p-1 pl-4">
        <img className="w-12" src="/img_logo.png" alt="" />
        <div className="flex flex-col">
          <p className="pl-1 font-semibold text-lg italic">Cocktail</p>
          <p className="pl-4 font-semibold text-lg italic">Cheatsheet</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
