import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const CardTest = ({ props }) => {
  return (
    <div className="flex flex-row flex-wrap justify-around">
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

  return (
    <div className="">
      <title>Cocktail boi</title>
      {loading && (
        <div className="mx-auto">
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        </div>
      )}
      {error && <p>Error</p>}
      {list.length > 0 && <CardTest props={list} />}
    </div>
  );
};

export default HomePage;
