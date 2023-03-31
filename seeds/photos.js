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
				console.log(photosArray)
				console.log(photosArray.length)
			})
			.catch(error => {
				console.log(error);
			});
	}
	urlsArray = await photosArray
}


module.exports = getPhotos()



urlsArray = [
  'https://images.unsplash.com/photo-1497373637916-e47a55e22d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1444228425018-ff8535a55c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496240476075-8bbe454c971a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1483140900273-56364d20ddc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1487845911428-da2a33549ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1444012104069-996724bf4a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1488228350390-e20f4c892840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1507668339897-8a035aa9527d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1502143655672-dbd02dd6abb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496483353456-90997957cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1484601767433-5a38c49cd738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1494329157681-b2a3c7ff8aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1456556845129-6c1dea4bd327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1506318039632-e5626c0c1394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1470549584009-d347338fc0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1505826673224-619d1494b8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1490839979032-803310bc5a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1487023269153-8ab6d0e24173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1497303742222-d5f5b02a68be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500221079655-3cb71a299f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1503038936394-899c7389c9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1498092590708-048e0e2f46d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
'https://images.unsplash.com/photo-1497373637916-e47a55e22d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1444228425018-ff8535a55c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496240476075-8bbe454c971a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1483140900273-56364d20ddc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1487845911428-da2a33549ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1444012104069-996724bf4a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1488228350390-e20f4c892840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1507668339897-8a035aa9527d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1502143655672-dbd02dd6abb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496483353456-90997957cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1484601767433-5a38c49cd738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1494329157681-b2a3c7ff8aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1456556845129-6c1dea4bd327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1506318039632-e5626c0c1394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1470549584009-d347338fc0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1505826673224-619d1494b8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1490839979032-803310bc5a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1487023269153-8ab6d0e24173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1497303742222-d5f5b02a68be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500221079655-3cb71a299f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1503038936394-899c7389c9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1498092590708-048e0e2f46d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1488667499475-42a530fab02b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496503662783-861c13d78261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500902613769-d7187c4d501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1464879972554-2a22f0ef1c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1487360920430-e18a62e59ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496425745709-5f9297566b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500676272244-4aea228b2dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1499284137338-1e38a6b386e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1502943615053-d8bd8c74eb1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500335208170-2c523bf90e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1492015466921-36fd6191c05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1502638434404-108c7f5fd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1501707305551-9b2adda5e527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1488509071915-f14a6a6bbc06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1496510010811-4f4dd90a0216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1485046636779-d3fa75df54d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500238595829-20885b38c441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1466220549276-aef9ce186540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1444228250525-3d441b642d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1468245856972-a0333f3f8293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1494376863055-e18dd6c6841a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1499051762965-9693026a4378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1494257473705-09a5a19d04af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1MTJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODAyODcwNDc&ixlib=rb-4.0.3&q=80&w=1080'
]








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