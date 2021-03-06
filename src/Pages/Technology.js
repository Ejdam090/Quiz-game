import React from "react";
import { useState } from "react";
import data from "../Data/questions.json";
import { useNavigate } from "react-router-dom";

import Question from "../Components/Question";
import StartBtn from "../Components/StartBtn";

import "./Styles.css";

import tech_img from "../assets/technologia_ikona.svg";
import hist_img from "../assets/historia_ikona.svg";
import moto_img from "../assets/motoryzacja_ikona.svg";
import kult_img from "../assets/kultura_ikona.svg";
import exit from "../assets/zamknij_x.svg";





const Technology = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(data.technology);

  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const handleCheck = (e) => {
    if (index >= 9) {
      setFinish(true);
      setStart(false);
    } else {
      if (category[index].answer === e.target.outerText) {
        setScore(score + 1);
      }
      setIndex(index + 1);
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    setStart(true);
  };
  const handleQuit = () => {
    setStart(false);
    setFinish(false);
    setScore(0);
    setIndex(0);
  };
  return (
    <div className="content-body ">
      {!start && !finish && (
        <div className="content">
          <div className="header">
            <h2 className="content-title">Quiz</h2>
          </div>
          <div className="category-text">
            <p className="text">Wybrana kategoria:</p>
          </div>
          <div className="category-selected">
            <img src={tech_img} alt="icon" className="technology-img" />
            <p className="tech">Technologia</p>
          </div>
          <StartBtn text="Rozpocznij" onChange={handleStart} />
        </div>
      )}
      {start && !finish && (
        <Question cat={category} submit={handleCheck} id={index} />
      )}
      {finish && !start && (
        <div className="content">
          <div className="content-body">
            <div className="category-selected">
              <div className="header">
                <h2 className="content-title">Quiz</h2>
              </div>
              <img src={tech_img} alt="icon" className="technology-img" />
              <p className="tech">Technologia</p>
            </div>
            <div className="result">
              <div className="result_text">
                <div className="score-paragraph">
                  <p>Tw??j wynik </p>
                </div>

                <div className="score">
                  <p>
                    {score} / {category.length}
                  </p>
                </div>
              </div>
              <StartBtn text="Powt??rz Quiz" onChange={handleQuit} />
            </div>
          </div>

          <div className="menu">
            <h2>Wybierz inna kategori??:</h2>
            <button
              onClick={() => navigate("/History")}
              className="menu-item history"
            >
              <img src={hist_img} alt="icon" className="history-img" />
              <p>Historia</p>
            </button>
            <button
              onClick={() => navigate("/Moto")}
              className="menu-item moto"
            >
              <img src={moto_img} alt="icon" className="moto-img" />
              <p>Motoryzacja</p>
            </button>
            <button
              onClick={() => navigate("/Culture")}
              className="menu-item culture "
            >
              <img src={kult_img} alt="icon" className="culture-img" />
              <p>Kultura</p>
            </button>
            <button
              onClick={() => navigate("/")}
              className="menu-item "
            >
              <img src={exit} alt="icon" className="exit-img" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;
