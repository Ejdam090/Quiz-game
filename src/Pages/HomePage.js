import React from "react";
import { useNavigate } from "react-router-dom";
import styled, {css} from "styled-components";

import tech_img from "../assets/technologia_ikona.svg";
import hist_img from "../assets/historia_ikona.svg";
import moto_img from "../assets/motoryzacja_ikona.svg";
import kult_img from "../assets/kultura_ikona.svg";

const Gradient = () =>{
  return css`
  linear-gradient(32deg, rgba(43,24,69,1) 26%, rgba(125,72,184,0.9500175070028011) 89%)
  `
};
const GradientHover = () =>{
  return css`
  linear-gradient(32deg, rgba(178,54,140,1) 53%, rgba(125,72,184,0.9500175070028011) 89%)
  `
};
const Pink = () =>{
  return css`
    #f849b3
  `
}


const ContentBody = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width:720px){
    height:700px;
  }
`;
const Header = styled.h2`
  display: block;
  text-transform: uppercase;
  font-size: 30px;
  height: 50px;
  margin-top: 40px;
  font-family: "Luckiest Guy", cursive;
  font-size: 50px;
  letter-spacing: 15px;
  @media only screen and (max-width:720px){
    font-size:30px;
  }
`;
const TextContent = styled.p`
  display: block;
  text-transform: uppercase;
  font-size: 30px;
  height: 50px;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(140, 1, 147, 0.7) 39%,
    rgba(131, 0, 138, 0.7) 63%,
    rgba(252, 252, 252, 0) 80%
  );
  width: 100%;
  padding-top: 20px;
  text-align: center;
  @media only screen and (max-width:720px){
    font-size:20px;
  }
`;
const Category = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 700px;
  margin-top: 50px;
  text-decoration: none;
  @media only screen and (max-width:720px){
    flex-direction:column;
    height: 100%;
    width:100%;
  }
`;
const CategoryBtn = styled.button`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-decoration: none;
  border: 1px solid #7855b1;
  box-shadow: 0px 0px 2px 1px rgba(120, 85, 177, 1);
  background: ${Gradient};
  border-radius: 5px;
  padding: 30px;
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: transform 0.4s;
  @media only screen and (max-width:720px){
    height:100px;
    width:100px;
  }
  &:hover {
    transform: scale(1.1);
    background: ${GradientHover};
  }
  
`;
const CategoryText = styled.p`
  text-transform: uppercase;
  display: block;
  color: #fff;
  border-top: 1px solid ${Pink};
  font-size: 14px;
  font-weight: bold;
  padding-top: 10px;
  margin-top: 20px;
  @media only screen and (max-width:720px){
    font-size: 10px;
  }
`;

const CategoryImg = styled.img`
  width: 50px;
  height: 50px;
  @media only screen and (max-width:720px){
    width:30px;
    height:30px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <ContentBody>
      <Header>Quiz</Header>
      <TextContent>10 pytań/ 4 kategorie</TextContent>
      <Category>
        <CategoryBtn onClick={() => navigate("/Technology")}>
          <CategoryImg src={tech_img} alt="icon" />
          <CategoryText>Technologia</CategoryText>
        </CategoryBtn>
        <CategoryBtn onClick={() => navigate("/History")}>
          <CategoryImg src={hist_img} alt="icon" />
          <CategoryText>Historia</CategoryText>
        </CategoryBtn>
        <CategoryBtn onClick={() => navigate("/Moto")}>
          <CategoryImg src={moto_img} alt="icon" />
          <CategoryText>Motoryzacja</CategoryText>
        </CategoryBtn>
        <CategoryBtn onClick={() => navigate("/Culture")}>
          <CategoryImg src={kult_img} alt="icon" />
          <CategoryText>Kultura</CategoryText>
        </CategoryBtn>
      </Category>
    </ContentBody>
  );
};

export default HomePage;
