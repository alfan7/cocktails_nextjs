import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { AiFillLeftCircle } from "react-icons/ai";

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
    <div className="bg-zinc-800 w-screen h-screen ">
      <title>{detail.strDrink} | Cocktail Cheatsheet</title>
      <img className="h-screen w-screen object-cover opacity-10 z-0 absolute transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300" src={detail.strDrinkThumb} alt="" />
      <Link href={"/home/"}>
        <div className="absolute z-0 m-4">
          <button>
            <AiFillLeftCircle size={40} color={"white"} />
          </button>
        </div>
      </Link>
      <div className="w-6/12 h-4/6 mx-auto pt-2 flex flex-row top-20 justify-center z-10 relative gap-4 items-center bg-slate-300 rounded-lg ">
        <img className="rounded-lg w-1/2 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 hover:rotate-1 duration-300" src={detail.strDrinkThumb} alt="" />
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-semilight italic">{detail.strDrink}</p>
          <p className="text-xl font-semibold italic">#{detail.strCategory}</p>
          <ul className="flex flex-col gap-2">
            <div className="flex justify-between">
              <li>{detail.strIngredient1}</li>
              <li>{detail.strMeasure1}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient2}</li>
              <li>{detail.strMeasure2}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient3}</li>
              <li>{detail.strMeasure3}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient4}</li>
              <li>{detail.strMeasure4}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient5}</li>
              <li>{detail.strMeasure5}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient6}</li>
              <li>{detail.strMeasure6}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient7}</li>
              <li>{detail.strMeasure7}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient8}</li>
              <li>{detail.strMeasure8}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient9}</li>
              <li>{detail.strMeasure9}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient10}</li>
              <li>{detail.strMeasure10}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient11}</li>
              <li>{detail.strMeasure11}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient12}</li>
              <li>{detail.strMeasure12}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient13}</li>
              <li>{detail.strMeasure13}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient14}</li>
              <li>{detail.strMeasure14}</li>
            </div>
            <div className="flex justify-between">
              <li>{detail.strIngredient15}</li>
              <li>{detail.strMeasure15}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
