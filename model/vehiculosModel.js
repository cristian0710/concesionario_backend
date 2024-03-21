import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    model:{
        type:Number,
        require:true
    },
    plaque:{
        type:String,
        require:true
    }

});


export default mongoose.model('vehiculos', userSchema);