const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title :{
        type : String,
        required:true
    },
    price :{
        type : Number,
        required:true
    },
    quantity:{
        type : Number,
        required:true
    },
    detail_quantity : [{
     color : { type :Schema.Types.ObjectId, ref: 'Color' },
     quantity : {type :Number}
    }],
    description:{
        type : String,
        required:true
    },

    provider :  { type: Schema.Types.ObjectId, ref: 'Provider' ,required: true },
    category :  { type: Schema.Types.ObjectId, ref: 'Category' ,required: true   },
    subcategory :  { type: Schema.Types.ObjectId, ref: 'Subcategory' ,required: true   },
    images :    [ { type: Schema.Types.ObjectId, ref: 'Image' ,required: true   }],
    colors :    [ { type: Schema.Types.ObjectId, ref: 'Color' ,required: true   }],

})
module.exports = mongoose.model('Product',ProjectSchema);