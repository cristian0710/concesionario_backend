import Vehiculo from '../model/vehiculosModel.js';

//Metodo (POST)
export const createVehiculo = async(req, res) => {
    try {
        const vehiculoDate = new Vehiculo(req.body);
        const {plaque} = vehiculoDate;
        console.log(plaque);
        const vehiculoExist = await Vehiculo.findOne({plaque});
        console.log(vehiculoExist);
        if(vehiculoExist){
            return res.status(400).json({message:"Vehiculo already exist"});
        }
        const saveVehiculo = await vehiculoDate.save();
        res.status(200).json(saveVehiculo);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (GET)
export const getVehiculos = async(req, res) => {
    try {
        const vehiculos = await Vehiculo.find();
        if(vehiculos.length === 0){
            return res.status(404).json({message:"Vehiculo not found"});
        }
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (PUT)
export const updateVehiculo = async(req, res) => {
    try {
        const id = req.params.id;
        const vehiculoExist = await Vehiculo.findOne({_id:id});
        if(!vehiculoExist){
            return res.status(404).json({message:"Vehiculo not found"});
        }
        const vehiculoUpdate = await Vehiculo.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(vehiculoUpdate);
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}

//Metodo (DELETE)
export const deleteVehiculo = async(req, res) => {
    try {
        const id = req.params.id;
        const vehiculoExist = await Vehiculo.findOne({_id:id});
        if(!vehiculoExist){
            return res.status(404).json({message:"Vehiculo not found"});
        }
        await Vehiculo.findByIdAndDelete(id);
        res.status(201).json({message:"Vehiculo delete Success"});
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}
