import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IAnimals } from "../../models/IAnimals";
import {
  HeaderStyling,
  LinkStyling,
  LinkStylingFeed,
  ParagrafStyling,
} from "../styledComponents/AllTexts";
import { SingleImageFixer } from "../styledComponents/Images";
import {
  SingleAnimalsWrapper,
  SingleAnimalWrapper,
} from "../styledComponents/Wrappers";

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
      <SingleAnimalsWrapper display={"flex"}>
        <SingleAnimalWrapper display={"flex"}>
          <HeaderStyling>{animal?.name}</HeaderStyling>
          <SingleImageFixer
            src={animal?.imageUrl}
            alt={animal?.name}
            height="100%"
            width="100%"
          />
          <ParagrafStyling>{animal?.longDescription}</ParagrafStyling>
          {animal?.isFed ? <h1>Matad</h1> : <h1>Inte matad</h1>}
          {animal?.isFed ? null : (
            <LinkStylingFeed onClick={() => handleFeedAnimal()}>
              Change Status
            </LinkStylingFeed>
          )}

          {animal?.isFed ? (
            <h3>this animal was feed at: {animal.lastFed}</h3>
          ) : null}

          <Link to={`/`}>
            <LinkStyling>Go back</LinkStyling>
          </Link>
        </SingleAnimalWrapper>
      </SingleAnimalsWrapper>
    </>
  );
};
