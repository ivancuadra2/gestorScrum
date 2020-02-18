import { Component } from 'react';
import firebase from '../config/firebase';
const Hola = 'holaMundo';


var holaDatabase = firebase.db;





async function HolaRepo(){

    try {
        await holaDatabase.collection(Hola).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc)
                console.log(`${doc.Hola} => ${doc.data().Hola}`);
            });
        });
        
        //console.log(holaDatabase);
        

    } catch (error) {
        console.log(error);
        console.log(" Rompio en Repo");
    }

}

export default HolaRepo;