const mongoose = require('mongoose');


//  table schema

const tableSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "date": { type: String, required: true },
    "people": { type: String, required: true },
    "special": { type: String, required: true },


});

// table model exportation
const table = mongoose.model('tables', tableSchema);
module.exports = table;
