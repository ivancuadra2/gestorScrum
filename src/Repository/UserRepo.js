import { Component } from 'react';
import firebase from '../config/firebase';
import { createPalette } from '@material-ui/core';
const collection = 'users';

class UserRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            data: {
            },

        }
    }

    getUsers = async () => {// 
        try {
            let coleccion = await firebase.db.collection(collection).get();
            let usuarios = [] ;
            coleccion.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                usuarios.push(doc.data())
                
               // console.log(doc.id, " => ", doc.data());
            });
            console.log("usuarios", usuarios)
            return usuarios;
        } catch (error) {
            console.log("Error en el Repo", error)
            throw new Error();
        }
    };

    // db.collection("cities").where("capital", "==", true)
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    



    // function UserRepo(){
        
    //     async function getUsers(){

            

    //         try {
    //             await connection.collection(users).get().then((querySnapshot) => {
    //                 querySnapshot.forEach((doc) => {
    //                     console.log(doc)
    //                     console.log(`${doc.Hola} => ${doc.data().Hola}`);
    //                 });
    //             });
                
                

    //         } catch (error) {
    //             console.log(error);
    //             console.log(" Rompio en Repo users");
    //         }

    //     }
        

    // }


}


export default new UserRepo();