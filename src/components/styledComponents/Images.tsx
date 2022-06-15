import styled from "styled-components";

interface IStyledImageProps {
  width: string;
  height: string;
}

export const ImageFixer = styled.img`
  width: ${(props: IStyledImageProps) => props.width || "100%"};
  height: ${(props: IStyledImageProps) => props.height || "100%"};
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-clip: none;
  max-height: 550px;
  max-width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    max-height: 600px;
    max-width: 500px;
  }
`;

export const SingleImageFixer = styled(ImageFixer)`
  width: ${(props: IStyledImageProps) => props.width || "100%"};
  height: ${(props: IStyledImageProps) => props.height || "100%"};
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-clip: none;
  max-height: 550px;
  max-width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    max-height: 600px;
    max-width: 500px;
  }
`;
