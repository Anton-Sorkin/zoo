import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IAnimals } from "../../models/IAnimals";

export const SpecificAnimal = () => {
  let params = useParams();
  const [animal, setAnimal] = useState<IAnimals>();

  useEffect(() => {
    const animals = localStorage.getItem("allAnimals" || "");
    if (animals) {
      let changeLocalList: IAnimals[] = JSON.parse(animals);
      const animal = changeLocalList.find((animal) => {
        if (params.id) {
          return animal.id === parseInt(params.id);
        }
      });
      setAnimal(animal);
    }
  }, [params]);

  const handleFeedAnimal = () => {
    if (animal) {
      const idToString = animal.id.toString();
      if (idToString === params.id) {
        const animals: string = localStorage.getItem("allAnimals") || "";
        let jsonAnimals = JSON.parse(animals);

        for (let i = 0; i < jsonAnimals.length; i++) {
          if (jsonAnimals[i].id === parseInt(params.id)) {
            jsonAnimals[i].isFed = true;
            jsonAnimals[i].lastFed = new Date().toISOString();
          }
        }
        localStorage.setItem("allAnimals", JSON.stringify(jsonAnimals));

        let xd = { ...animal };
        xd.isFed = true;
        xd.lastFed = new Date().toISOString();
        setAnimal(xd);
      }
    }
  };

  return (
    <>
      <div>
        <h1>{animal?.name}</h1>
        <img src={animal?.imageUrl} alt={animal?.name} />
        <p>{animal?.longDescription}</p>
        <button onClick={() => handleFeedAnimal()}>Change Status</button>

        <Link to={`/`}>Back to home</Link>
      </div>
    </>
  );
};
