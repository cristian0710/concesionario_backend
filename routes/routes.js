import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";
import { createVehiculo, deleteVehiculo, getVehiculos, updateVehiculo } from "../controller/vehiculoControllers.js";


const route = express.Router();

//Metodos Users
route.post("/user/createuser", createUser);
route.get("/users/getusers", getUsers);
route.put("/users/updateuser/:id", updateUser);
route.delete("/users/deleteuser/:id", deleteUser);

//Metodos vehiculos
route.post("/cars/createvehiculo", createVehiculo);
route.get("/cars/getvehiculos", getVehiculos);
route.put("/cars/updatevehiculo/:id", updateVehiculo);
route.delete("/cars/deletevehiculo/:id", deleteVehiculo);

export default route;