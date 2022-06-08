import { React, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = (props) => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText);
  };
  return (
    <div className="w-11/12 m-2 h-16 fixed z-10 inset-x-0 mx-auto rounded-lg bg-slate-400 shadow-lg">
      <div className="flex flex-row gap-2 items-center p-1 pl-4">
        <img className="w-12" src="/img_logo.png" alt="" />
        <div className="flex flex-col">
          <p className="pl-1 font-semibold text-lg italic">Cocktail</p>
          <p className="pl-4 font-semibold text-lg italic">Cheatsheet</p>
        </div>
        <div className="search-box flex flex-row gap-2 items-center">
          <input id="outlined-basic" onChange={inputHandler} className="search-text" type="text" placeholder=" Search Cocktail" />
          <a className="search-btn" href="#">
            <BsSearch color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
