const axios = require('axios');

let urlsArray = [];
// Upsplash API
const apiKey = 'xPH8fsK-gG1HqJnU5ouRETnwqdtqgnC2m7-7VA4A4bA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&collections=483251&count=25`;


async function getPhotos() {
	let photosArray = [];
	for (let i = 0; i < 2; i++) {
		axios.get(apiUrl)
			.then(response => {
				const photos = response.data;
				photos.forEach(photo => {
					photosArray.push(photo.urls.regular);
				});
				// console.log(photosArray)
				// console.log(photosArray.length)
			})
			.catch(error => {
				console.log(error);
			});
	}
	urlsArray = await photosArray
}


module.exports = getPhotos()











// async function getPhotos() {
// 	try {
// 		const response = await fetch(apiUrl);
// 		data = await response.json();
// 		console.log(data.length);
		
// 	} catch (err) { 
// 		console.log(err);
// 	}
// }

// photosArray.push(getPhotos)
// console.log(photosArray)