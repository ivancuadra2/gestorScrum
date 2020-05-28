import { Component } from 'react';
import  UserRepo from '../Repository/UserRepo';
import AdminRepo from '../Repository/AdminRepo';


class AdminController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
            },

        };
    }

    getAdminByEmail = async (email) => {
        try {
            let admin = await AdminRepo.getExistsAdmin(email);
            console.log('Admin en Controller', admin);
            if (admin) {
                
                return admin;
            } else {

                console.log("No existe el admin");
                return false;
            }

        } catch (error) {
            console.log("Error", error)
            //throw new Error();
        }
    }

}
   


export default new AdminController(); 