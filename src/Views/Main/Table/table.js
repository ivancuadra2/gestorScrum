import React, { useState, useEffect } from "react";
import "./table.css";
import firebase from "config/firebase";

export default function Table() {
  const [users, setUsers] = useState("loading");

  useEffect(() => {
    const getUsers = async () => {
      let array_users = [];
      await firebase.db
        .collection("users")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let new_user = doc.data();
            new_user.mail = doc.id;
            array_users.push(new_user);
          });
          setUsers(array_users);
        })
        .catch((e) => {
          console.log(e);
          setUsers(null);
        });
    };

    if (users === "loading") getUsers();
  }, [users]);

  if(users === 'loading') return <div className="loading"></div>

  return <div className="content-admin-table">
      {users && users.map((u, i) => <p key={i}>{u.mail}</p>)}
  </div>;
}
