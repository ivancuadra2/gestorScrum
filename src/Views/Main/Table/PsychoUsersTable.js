import React, { useState, useEffect } from "react";
import "./table.css";
import UserRepo from "../../../Repository/UserRepo";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

export default function PsychoUsersTable() {
  const [psychoUsers, setPsychoUsers] = useState("loading");
  const [actions, setActions] = useState([]);
  const [name, setName] = useState("Seleccione un usuario")
  useEffect(() => {
    const getUsers = async () => {
      const users = await UserRepo.getPsychoUsers();
      setPsychoUsers(users);
    };
    if (psychoUsers === "loading") getUsers();
  }, [psychoUsers]);
  async function clickEye(user) {
    setName(user.name);
    setActions(user.actions || []);
  }
  if (psychoUsers === "loading") return <Loading/>;
  return (
    <div>
      <Card className="text-center" >
        <Card.Title >Usuarios</Card.Title>
        <Card.Body>
          <Table striped bordered hover  >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Género</th>
                <th>Pais</th>
                <th>#</th>
              </tr>
            </thead>
            {psychoUsers.map((u, i) =>
              <tbody key={i}>
                <tr>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{Boolean(u.male) ? "Masculino" : "Femenino"}</td>
                  <td>{u.country}</td>
                  <td>
                    <Button variant="light" onClick={() => clickEye(u)} >
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
                <th>Action ID</th>
                <th>Object ID</th>
                <th>Value</th>
                <th>Date</th>
              </tr>
            </thead>
            {actions.map((a, i) =>
              <tbody key={i} >
                <tr>
                  <td>{a.actionId}</td>
                  <td>{a.objectId}</td>
                  <td>{a.value}</td>
                  <td>{a.date}</td>
                </tr>
              </tbody>)}
          </Table>
        </Card.Body>
      </Card>
    </div>);
}