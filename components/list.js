import { React, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function List(props) {
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

  console.log(list);

  const filteredData = list.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.strDrink.toLowerCase().includes(props.input);
    }
  });

  return (
    <div className="mx-4 mt-12 flex flex-row flex-wrap justify-around">
      {filteredData.map((data) => (
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
}

export default List;
