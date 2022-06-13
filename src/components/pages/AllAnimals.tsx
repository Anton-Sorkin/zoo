import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IAnimals } from "../../models/IAnimals";

import { AllAnimalsWrapper } from "../styledComponents/Wrappers";

interface IAllAnimalsProps {
  animals: IAnimals[];
  showAnimals(animals: IAnimals[]): void;
}

export const AllAnimals = (props: IAllAnimalsProps) => {
  return (
    <>
      <div>
        {props.animals.map((animalList) => {
          return (
            <AllAnimalsWrapper key={animalList.id}>
              <h1>{animalList.name}</h1>
              <img src={animalList.imageUrl} alt={animalList.name} />
              <p>{animalList.shortDescription}</p>
              <Link to={`/animals/${animalList.id}`} key={animalList.id}>
                Find out more!
              </Link>
            </AllAnimalsWrapper>
          );
        })}
      </div>
    </>
  );
};
