//Registrarse
//Iniciar sesión
//Cerrar seción
//Obtener información del usuario
//Crer transacciones
//Pedir prestamos
//Borrar cuenta
//Actualizar

import UserModel from ".../models/UserModel.js"
import ManagerAccount from "./AccountClass";
import ManagerCard from "./CardClass";

class ManagerUser{
    constructor(
        email,
        phone,
        name,
        lastName,
        isInSession,
        isInAdmin,
        password 
    ){
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isInAdmin = isInAdmin;
        this.password = password;
    }

    async register(){
        try{
        const user = await UserModel.create({
            email: this.email,
            phone:this.phone,
            name:this.name,
            lastName:this.lastName,
            isInSession:this.isInSession,
            password:this.password,


        });
        const MA = new ManagerAccount(user._id, 12, "Ahorro", 10000);
        const currentAcount = await MA.createAccount();
        const MC = new ManagerCard(user._id,currentAcount._id, "16 digitos al azar", "debito", "De la fecha actual sumar 3 años", "Generar codigo de 3 cifras","active");
        await MC.createCard();
        return user;

    }catch(error){
        throw new Error(`Error al registrar usuario:${error}`);
            
    }
  }

  async login(email, password){
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            throw new Error(`Ususario no registrado`)
        }
        if(user.password !== password){
            throw new Error(`Contraseña incorrecta!`)
        }
        return "Succeeded"
    } catch (error) {
        throw new Error(`Error al registrar usuario:${error}`);
    }    
  }

  async getUserInfo(id){
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        throw new Error(`Error al obtener informacion del usuario:${error}`);
    }
  }
  async updateEmail(id, email){
    try {
        if(!email){
            throw new Error (`Correo invalido`);
        }
        await UserModel.findByIdAndUpdate(id,{$set:{email}
        });
        return "Ok"
    } catch (error) {
        throw new Error(`Error al actualizr el correo del usuario:${error}`);
    }


  }

  async updatePhone(id, phone){
    try {
        if(!phone){
            throw new Error (`Numero telefonico invalido`);
        }
        await UserModel.findByIdAndUpdate(id,{$set:{phone}
        });
        return "Ok"
    } catch (error) {
        throw new Error(`Error al actualizr el numero telefonico del usuario:${error}`);
    }


  }

  async updatePassword(id, password){
    try {
        if(!password){
            throw new Error (`Contraseña invalida`);
        }
        await UserModel.findByIdAndUpdate(id,{$set:{password}
        });
        return "Ok"
    } catch (error) {
        throw new Error(`Error al actualizr la contraseña del usuario:${error}`);
    }

  }

  //Pendiente eliminar usuario

}

export default ManagerUser;

