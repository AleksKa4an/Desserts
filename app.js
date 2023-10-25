const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const methodOverride = require('method-override');

const Product = require('./models/products');
const Dessrt = require('./models/desserts');

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/desserts');
	console.log('Connected to MongoDB');
};

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/products', async (req, res) => {
	const products = await Product.find({});
	res.render('products/index', { products })
});
app.get('/products/new', (req, res) => {
	res.render('products/new')
});
app.post('/products', async (req, res) => {
	const prod = new Product(req.body.product);
	await prod.save();
	res.redirect(`/products/${prod._id}`);
});
app.get('/products/:id', async (req, res) => {
	const prod = await Product.findById(req.params.id);
	res.render('products/show', { prod })
});
app.get('/products/:id/edit', async (req, res) => {
	const prod = await Product.findById(req.params.id);
	res.render('products/edit', { prod })
});
app.put('/products/:id', async (req, res) => {
	const { id } = req.params;
	const prod = await Product.findByIdAndUpdate(id, { ...req.body.product });
	res.redirect(`/products/${prod._id}`);
});
app.delete('/products/:id', async (req, res) => {
	const { id } = req.params;
	await Product.findByIdAndDelete(id);
	res.redirect('/products');
});


app.listen(3000, () => {
	console.log('App is listening on port 3000!')
})