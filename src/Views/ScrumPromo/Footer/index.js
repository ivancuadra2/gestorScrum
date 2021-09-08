import React, {useContext} from "react";
import LanguageContext from '../../../Context/index';
import "./css.css";

import Storage from "Repository/Storage";

export default function Footer() {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="footer background-svg">
      <div className="content-width content-footer">
        <div className="content-comenzar">
          <h4 className="txt-comenza">{texts.FOOTER_TEXT}</h4>
          <button
            className="button white"
            onClick={() => Storage.getScrumGame()}
          >
            {texts.HEADER_BUTTON2}
          </button>
        </div>

        <div className="footer-f">
          <div className="copyright">&copy; 2020 - SCRUM Game</div>
        </div>
      </div>
    </div>
  );
}
