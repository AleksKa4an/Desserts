const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');


main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
	console.log('Connected to MongoDB');
};

const sample = arr => arr[Math.floor(Math.random() * arr.length)];
const random = (min, max) => Math.floor(Math.random() * min + max);

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const camp = new Campground({ title: `${sample(descriptors)} ${sample(places)}`, price: `$${random(500, 100)}`, location: `${cities[random(1000, 0)].city}, ${cities[random(1000, 0)].state}` });
		await camp.save();
	}
}

seedDB().then(() => {
	mongoose.connection.close();
});