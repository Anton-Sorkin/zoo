import { Link } from "react-router-dom";
import { IAnimals } from "../../models/IAnimals";
import {
  HeaderStyling,
  LinkStyling,
  ParagrafStyling,
} from "../styledComponents/AllTexts";
import { ImageFixer } from "../styledComponents/Images";

import {
  AllAnimalsWrapper,
  EachAnimalWrapper,
} from "../styledComponents/Wrappers";

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
            <AllAnimalsWrapper key={animalList.id} display={"flex"}>
              <EachAnimalWrapper display="flex">
                <HeaderStyling>{animalList.name}</HeaderStyling>

                <ImageFixer
                  src={animalList.imageUrl}
                  alt={animalList.name}
                  height="100%"
                  width="100%"
                />

                <ParagrafStyling>{animalList.shortDescription}</ParagrafStyling>
                <Link to={`/animals/${animalList.id}`} key={animalList.id}>
                  <LinkStyling>See more</LinkStyling>
                </Link>
              </EachAnimalWrapper>
            </AllAnimalsWrapper>
          );
        })}
      </div>
    </>
  );
};
