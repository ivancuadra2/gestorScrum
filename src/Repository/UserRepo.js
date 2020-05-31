import { Component } from 'react';
import firebase from '../config/firebase';
/* import { createPalette } from '@material-ui/core'; */
const collection = 'users';

class UserRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            data: {
            },

        }
    }

    getUsersId = async () => {// 
        try {
            let coleccion = await firebase.db.collection(collection).get();
            let usuarios = coleccion.docs.map(doc => doc.id);
            console.log("usuarios", usuarios)
            return usuarios;
        } catch (error) {
            console.log("Error en el Repo", error)
            throw new Error();
        }
    };

    



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