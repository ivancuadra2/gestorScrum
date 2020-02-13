
import { Component } from 'react';
import  HolaRepo from '../Repository/HolaRepo';



function HolaController2(){
   
    try {
        
        return HolaRepo();

        
    } catch (error) {
        console.log(" Rompio en Repo");
    }
}

export default HolaController2; 

