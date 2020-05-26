import { Component } from 'react';
import  UserRepo from '../Repository/UserRepo';

class UserController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
            },

        };
    }

    getAllUsers = async () => {
        try {
            let users = await UserRepo.getUsersId();

            if (users) {
                
                return users;
            } else {
                console.log("No se pudo obtener el listado de usuarios");
                return false;
            }

        } catch (error) {
            console.log("Error", error)
            //throw new Error();
        }
    }

}
   


export default new UserController(); 

