const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const UserSchema = new Schema({
   
    firstname : {
        type : String,
        required : [true,(Error + 'npm')]
    },
    lastname : {
        type : String,
        required : [true,(Error + 'prenom')]
    },
    image : {
        type : String
    },
    civilite : {
        type : String,
    
    },
    email :{ 
        type : mongoose.SchemaTypes.Email,
        required : [true,(Error + 'email')],
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    orders : [{type: Schema.Types.ObjectId, ref: 'Order'}]
})
module.exports = mongoose.model('User',UserSchema);