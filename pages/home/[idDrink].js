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
    <div>
      {detail.strDrink}, {detail.idDrink}
    </div>
  );
};

export default CocktailDetail;
