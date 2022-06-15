import styled from "styled-components";

interface IAllAnimalsWrapperProps {
  display: string;
}

export const AllAnimalsWrapper = styled.div`
  display: ${(props: IAllAnimalsWrapperProps) => props.display || "flex"};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 100px;
  width: 100vw;
`;

export const EachAnimalWrapper = styled(AllAnimalsWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60%;
  padding: 5px;
  background-color: lightgray;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.111);
  @media (min-width: 768px) {
    flex-direction: none;
    height: 50%;
    width: 80%;
  }
`;

export const SingleAnimalsWrapper = styled.div`
  display: ${(props: IAllAnimalsWrapperProps) => props.display || "flex"};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  width: 100vw;
  height: 100%;
`;

export const SingleAnimalWrapper = styled(SingleAnimalsWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 60%;
  padding: 5px;
  background-color: lightgray;
  border-radius: 15px;
  margin-top: 0px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.111);
  padding-top: 0px;
  @media (min-width: 768px) {
    flex-direction: none;
    height: 50%;
    width: 80%;
  }
`;
