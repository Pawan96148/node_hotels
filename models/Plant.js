const mongoose=require('mongoose');

const plantSchema=new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    species:{
        type:String,
        require:true
    },
    is_flower: {
        type:Boolean,
        default:false
    },
    is_fruit:{
        type:Boolean,
        default:false
    }

})
const Plant=mongoose.model('Plant',plantSchema);
module.exports=Plant;