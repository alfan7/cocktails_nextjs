import { React, useState } from "react";
import List from "../../components/list";
import { BsSearch } from "react-icons/bs";
import Navbar from "../../components/navbar";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main bg-slate-800 w-screen">
      <title>List | Cocktail Cheatsheet</title>
      <Navbar />
      <div className="search-box mt-10 flex flex-row gap-2 items-center">
        <input id="outlined-basic" onChange={inputHandler} className="search-text" type="text" placeholder=" Search Cocktail" />
        <a className="search-btn" href="#">
          <BsSearch color={"white"} />
        </a>
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
