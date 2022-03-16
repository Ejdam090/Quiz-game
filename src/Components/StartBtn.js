import React from 'react';
import Arrow from '../assets/button_strzałka_plus.svg'

import "./StartBtn.css";

const StartBtn = ({onChange,text}) => {


  return (
    <>
      <button className="startBtn" onClick={onChange}>
        <p>{text}</p> <img src={Arrow} className='arrow-img' />
      </button>
    </>
  );
};

export default StartBtn;
