const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DessertSchema = new Schema({
	title: String,
	group: String,
	ingrediens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
	weight: Number,
	cost: Number,
	price: Number,
	recepieURL: String,
});

module.exports = mongoose.model('Dessert', DessertSchema);