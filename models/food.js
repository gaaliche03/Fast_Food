const mongoose = require('mongoose');


//  food schema

const foodSchema = new mongoose.Schema({
    "food":{type:[{"type" :String , required :true}], required :true},
    "crust": { type: String, required: true },
    "toppings":{type:[{"type" :String , required :true}], required :true},
    "cheese":{type:[{"type" :String , required :true}], required :true},
    "others":{type:[{"type" :String , required :true}], required :true},
    "note": { type: String},

});

// food model exportation
const food = mongoose.model('foods', foodSchema);
module.exports = food;
