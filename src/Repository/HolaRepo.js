import { Component } from 'react';
import firebase from '../config/firebase';
const Hola = 'hola';



async function HolaRepo(){

    try {
        
        return firebase.log('Estoy en Repo') 
    } catch (error) {
        console.log(" Rompio en Controller");
    }

}

export default HolaRepo;