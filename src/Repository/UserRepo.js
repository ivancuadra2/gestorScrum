import { Component } from 'react';
import firebase from '../config/firebase';
const collection = 'users';
const PSYCHO_USERS_COLLECTION = "usersPsycho";

class UserRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: {
            },

        }
    }



    getUsers = async () => {
        try {
            let coleccion = await firebase.db.collection(collection).get();
            let usuarios = [];
            coleccion.forEach(function (doc) {
                usuarios.push(doc.data())

            });
            return usuarios;
        } catch (error) {
            console.log("Error en el Repo", error)
            throw new Error();
        }
    };

    getLevels = async (mail) => {
        try {
            if(mail === null){
                return false;
            }
            let coleccion = await firebase.db.collection(collection).doc(mail).collection("levels").get();
            let levels = [];
            coleccion.forEach(function (doc) {
                levels.push(doc.data())
            });
            return levels;

        } catch (err) {
            console.log("Error en repo : ", err)
        }

    }

    getPsychoUsers = async () => {
        try {
            let psychoUsers = [];
            await firebase.db
                .collection(PSYCHO_USERS_COLLECTION)
                .get()
                .then(querySnapshot => querySnapshot.forEach(u => psychoUsers.push({ id: u.id, ...u.data() })));
            return psychoUsers;
        } catch (error) {
            throw new Error(error);
        }
    };
}

export default new UserRepo();