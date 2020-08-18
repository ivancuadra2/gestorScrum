import { Component } from 'react';
import firebase from '../config/firebase';
const collection = 'users';

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


}


export default new UserRepo();