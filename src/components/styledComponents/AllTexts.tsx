import styled from "styled-components";

export const HeaderStyling = styled.h1`
  font-size: 20pt;
`;

export const ParagrafStyling = styled.p`
  font-size: 8pt;
  text-align: center;
  padding: 5px;
`;

export const LinkStyling = styled.button`
  text-decoration: none;
  border: none;
  background-color: black;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const LinkStylingFeed = styled(LinkStyling)`
  background-color: #246420;
`;
