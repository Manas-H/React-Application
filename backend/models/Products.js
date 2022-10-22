const mongoose = require('mongoose');

const Products = mongoose.Schema( {

    name: { type: String },
    product_id :{ type: Number},
    series_id: { type: Number},
    images: [{type: String }],
    description: { type: String },
    Dimensions: { type: Array },
    esp: {type: Number},
    mrp: {type: Number},
    discount: {type: Number},
    category: {type: String},},
    { timestamps: true }
);


module.exports = mongoose.model("Products", Products);