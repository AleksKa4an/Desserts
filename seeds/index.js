const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const apiKey = 'xPH8fsK-gG1HqJnU5ouRETnwqdtqgnC2m7-7VA4A4bA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&collections=483251&count=50`;


main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
	console.log('Connected to MongoDB');
};

const sample = arr => arr[Math.floor(Math.random() * arr.length)];
const random = (min, max) => Math.floor(Math.random() * min + max);
let photos = [];
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photos = await response.json();
		return photos
	} catch (err) { 
		console.log(err);
	}
}

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const photoUrl = photos[i].urls.regular;
		const camp = new Campground({ title: `${sample(descriptors)} ${sample(places)}`, price: random(500, 100), location: `${cities[random(1000, 0)].city}, ${cities[random(1000, 0)].state}`, image: `${photoUrl}`, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quaerat iusto nisi dolor dolore voluptates porro, molestias magni recusandae. Enim reiciendis, atque laborum aut perferendis minus suscipit id ex veniam.'});
		await camp.save();
	}
}

getPhotos()
	.then(seedDB)
	.then(() => {
		mongoose.connection.close();
	})


