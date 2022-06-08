import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import List from "../../components/list";
import Navbar from "../../components/navbar";

const CardTest = ({ props }) => {
  return (
    <div className="mx-4 pt-28 flex flex-row flex-wrap justify-around">
      {props.map((data) => (
        <Link href={"/home/" + data.idDrink} key={data.idDrink}>
          <div className="card w-80 m-8 rounded-lg">
            <img className="card-image rounded-lg" src={data.strDrinkThumb} alt={data.strDrink} />
            <div className="card-info">
              <h1 className="text-5xl my-4 italic">{data.strDrink}</h1>
              <p className="mb-1 text-lg italic">#{data.strCategory}</p>
              <p className="text-sm">{data.strInstructions}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchCocktail() {
      try {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
        setList(res.data.drinks);
        console.log(res.data.drinks);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    fetchCocktail();
  }, []);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText);
  };

  return (
    <div className="bg-slate-800">
      <title>Cocktail boi</title>
      <div className="block z-20">
        <div className="search-box flex flex-row gap-2 items-center">
          <input id="outlined-basic" onChange={inputHandler} className="search-text" type="text" placeholder=" Search Cocktail" />
          <a className="search-btn" href="#">
            <BsSearch color={"white"} />
          </a>
        </div>
      </div>
      <Navbar />
      {loading && (
        <div className="mx-auto">
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        </div>
      )}
      {error && <p>Error</p>}
      {list.length > 0 && <List props={list} />}
    </div>
  );
};

export default HomePage;
