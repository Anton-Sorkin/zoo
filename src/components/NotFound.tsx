import { Link } from "react-router-dom";
import { LinkStyling } from "./styledComponents/AllTexts";
import {
  SingleAnimalsWrapper,
  SingleAnimalWrapper,
} from "./styledComponents/Wrappers";

export const NotFound = () => {
  return (
    <>
      <SingleAnimalsWrapper display={"flex"}>
        <SingleAnimalWrapper display={"flex"}>
          <h1>Oops, Something went wrong!</h1>
          <p>Click the link to get back to home page</p>
          <Link to={`/`}>
            <LinkStyling>To home</LinkStyling>
          </Link>
        </SingleAnimalWrapper>
      </SingleAnimalsWrapper>
    </>
  );
};
