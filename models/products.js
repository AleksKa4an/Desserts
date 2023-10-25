const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	title: String,
	weight: Number,
	price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
