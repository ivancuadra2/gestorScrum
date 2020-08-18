import React, { useState, useEffect } from "react";
import UserRepo from "../../../Repository/UserRepo";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'



export default function TableLevel(props) {
  const { email, levels } = props;



  if (levels === 'loading') return <div className="loading"></div>

  return (
    <div>
      <Card>
        <Card.Title>{email}</Card.Title>
        <Card.Body>
          <Table striped bordered hover  >
            <thead>
              <tr>
                <th>Level</th>
                <th>Status</th>
                <th>Blocked</th>
                <th>SubLevelId</th>
                <th>Total Games</th>
                <th>Tutorial Completed</th>

              </tr>
            </thead>
            {levels.map((u, i) =>
              <tbody key={i} >
                <tr>
                  <td onClick={console.log("Status: ", u.status)}>{u.levelId}</td>
                  <td>{u.status}</td>
                  <td>{u.blocked}</td>
                  <td>{u.sublevelId}</td>
                  <td>{u.totalGames}</td>
                  <td>{u.tutorialCompleted}</td>

                </tr>
              </tbody>)}
          </Table>

        </Card.Body>
      </Card>
    </div>);
}