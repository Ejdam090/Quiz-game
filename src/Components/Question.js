import React, { useState, useEffect } from "react";

import "../Styles/Question.css";

const Question = ({ cat, id, submit }) => {


  return (
    <div className="content-body">
    <div className="question">
      <div className="question-content">
        <h2>Wybierz poprawną odpwiedź </h2>

        <div className="question-text">
          <span>{cat[id].question}</span>
        </div>
        <div className="question-answers">
          {cat[id].choices.map((answer) => (
            <button onClick={submit} className="answer-btn" key={answer}>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div></div>
  );
};

export default Question;
