const mongoose = require('mongoose');

const Series = mongoose.model('Series',{
      Series_id: { type: Number , required: true, unique: true},
      Series_name: { type: String , required: true },
      Series_images: {type: Array, required: true},
      Series_description: { type: String , required: true },
},);


module.exports = {Series};