import React, { useState, useEffect, useContext } from "react";
import "./css.css";
import logo from "./logo2.png";
import Buttons from "./Buttons";
import Burger from "./Burger";
import LanguageContext from "../../../Context/index";

export default function Nav() {
  const [visible, setVisible] = useState(
    window.scrollY > window.innerHeight / 2
  );

  const handleScroll = () =>
    setVisible(window.scrollY > window.innerHeight / 2);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [classButtons, setClassButtons] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  }

  const onClickBurger = () => {
    if (classButtons === "") {
      setClassButtons("toggle");
    } else {
      setClassButtons("");
    }
  };
  if (!visible) return null;
  else
    return (
      <div
        className="content-nav"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="content-width nav">
          <img className="logo" src={logo} alt="SCRUM Game" />
          <Buttons classButtons={classButtons} />
          <Burger onClickBurger={onClickBurger} />
        </div>
        <select className="language" value={language} onChange={handleChange}>
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>
      </div>
    );
}
