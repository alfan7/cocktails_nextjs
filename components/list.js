import React from "react";
import Link from "next/dist/client/link";

const List = ({ props }) => {
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

export default List;
