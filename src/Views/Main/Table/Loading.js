import React from "react";
import "./table.css";
import Spinner from 'react-bootstrap/Spinner';

export default class Loading extends React.Component {
  render = () => (
    <div className="cuerpo">
      <Spinner animation="border" role="status" className="spinner">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}