const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const methodOverride = require('method-override');

const Campground = require('./models/campground');

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
	console.log('Connected to MongoDB');
};

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/campgrounds', async (req, res) => {
	const campgrounds = await Campground.find({});
	res.render('campgrounds/index', {campgrounds})
});
app.get('/campgrounds/new', (req, res) => {
	res.render('campgrounds/new')
});
app.post('/campgrounds', async (req, res) => {
	const camp = new Campground(req.body.campground);
	await camp.save();
	res.redirect(`/campgrounds/${camp._id}`);
});
app.get('/campgrounds/:id', async (req, res) => {
	const camp = await Campground.findById(req.params.id);
	res.render('campgrounds/show', {camp})
});
app.get('/campgrounds/:id/edit', async (req, res) => {
	const camp = await Campground.findById(req.params.id);
	res.render('campgrounds/edit', {camp})
});
app.put('/campgrounds/:id', async (req, res) => {
	const {id} = req.params;
	const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground});
	res.redirect(`/campgrounds/${camp._id}`);
});
app.delete('/campgrounds/:id', async (req, res) => {
	const {id} = req.params;
	await Campground.findByIdAndDelete(id);
	res.redirect('/campgrounds');
});


app.listen(3000, () => {
	console.log('App is listening on port 3000!')
})