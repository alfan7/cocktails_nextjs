import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CocktailDetail = () => {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { idDrink } = router.query;

  useEffect(() => {
    setLoading(true);
    async function fetchCocktail() {
      try {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
        setDetail(res.data.drinks[0]);
        console.log(res.data.drinks[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    fetchCocktail();
  }, [idDrink]);

  return (
    <div className="bg-zinc-800 w-screen h-screen">
      <div className="w-6/12 bg-slate-300 rounded-lg">
        <p>{detail.strDrink}</p>
        <img src={detail.strDrinkThumb} alt="" />
      </div>
    </div>
  );
};

export default CocktailDetail;
