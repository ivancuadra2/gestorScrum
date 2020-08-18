import React, { useState, useEffect } from "react";
import "./table.css";
import UserRepo from "../../../Repository/UserRepo";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'



export default function TableUsers() {
  const [users, setUsers] = useState("loading");
  const [levels, setLevels] = useState([]);
  const [name, setName]= useState("Seleccione un usuario")

  useEffect(() => {
    const getUsers = async () => {
      //let array_levels = await UserRepo.getLevels();// id que es el email
      let array_users = await UserRepo.getUsers();
      setUsers(array_users)

    };

    if (users === "loading") getUsers();
  }, [users]);

  async function clickEye(mail) {
    let array_levels = await UserRepo.getLevels(mail);
    if(!array_levels){
      alert("No hay usuario")
    }else{
      setName(mail)
      setLevels(array_levels);
    }
  }

  if (users === 'loading') return <div className="loading"></div>

  return (
    <div>
      <Card className="text-center" >
        <Card.Title >Usuarios</Card.Title>
        <Card.Body>
          <Table striped bordered hover  >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Email</th>
                <th>Profesion</th>
                <th>Pais</th>
                <th>Ciudad</th>
                <th>#</th>
              </tr>
            </thead>
            {users.map((u, i) =>
              <tbody key={i}>
                <tr>
                  <td>{u.name}</td>
                  <td>{u.gender}</td>
                  <td>{u.mail}</td>
                  <td>{u.profession}</td>
                  <td>{u.country}</td>
                  <td>{u.city}</td>
                  <td>
                    <Button variant="light" onClick={() => clickEye(u.mail)} >
                      <FontAwesomeIcon icon={faEye} />
                    </Button>
                  </td>
                </tr>

              </tbody>)}
          </Table>

        </Card.Body>
      </Card>

      <Card className="text-center">
            <Card.Title>{name}</Card.Title>

        <Card.Body>

          <Table striped bordered hover >
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
                  <td> {u.levelId} </td>
                  <td>{u.status}</td>
                  <td>{u.blocked.toString()}</td>
                  <td>{u.sublevelID}</td>
                  <td>{u.totalGames}</td>
                  <td>{u.tutorialCompleted.toString()}</td>

                </tr>

              </tbody>)}
          </Table>

        </Card.Body>
      </Card>
    </div>);
}
