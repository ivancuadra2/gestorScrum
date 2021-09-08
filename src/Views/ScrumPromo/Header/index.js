import React, { useState, useContext} from "react";
import "./css.css";
import img from "./scrum3.png";
import { scroller } from "react-scroll";
import Storage from "Repository/Storage";
import LanguageContext from "../../../Context/index";

const scrollType = {
  duration: 1000,
  smooth: true, // linear “easeInQuint” “easeOutCubic”
  offset: -50,
};

const onClickWhatItIs = () => {
  scroller.scrollTo("WhatItIs", scrollType);
};

export default function Header(props) {

  const [data, setData] = useState({ text1: props.text1 });

  const handleDefaultProps = () => {
    setData({ text1: props.text1 });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setData({ ...data, [name]: target.value });
  };

  const handleClickCancel = (e) => {
    handleDefaultProps();
  };

  const { texts } = useContext(LanguageContext);

  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  }

  return (
    <div className="header">
      <div className="background-svg">
        <div className="content-width content-header">
          <img
            className="img-scrum"
            src={img}
            alt="Imagen SCRUM"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div
            className="content-button-text"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            {props.edit ? (
              <div>
                <button className="button">{texts.BUTTON_SAVE}</button>
                <button className="button" onClick={handleClickCancel}>
                  {texts.BUTTON_CANCEL}
                </button>
                <input
                  type="text"
                  className="sentence edit"
                  name="text1"
                  //value={data.text1}
                  value={texts.HEADER_TITLE}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <h2 className="sentence">{texts.HEADER_TITLE}</h2>
            )}
            <div className="content-buttons-header">
              <button
                className="button white button-header"
                onClick={onClickWhatItIs}
              >
                {texts.HEADER_BUTTON}
              </button>
              <button
                className="button transparent button-header-login"
                onClick={() => Storage.getScrumGame()}
              >
                {texts.HEADER_BUTTON2}
              </button>
            </div>
            <select className="language marginTop" value={language} onChange={handleChange} >
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>
          </div>
        </div>
      </div>
    </div>
  );
}
