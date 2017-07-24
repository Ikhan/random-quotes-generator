const axios = require('axios')


 const quotes = async function () {
	const res =  await axios.get('https://talaikis.com/api/quotes/random/');

	console.log(`
					###################################################################################################
							${res.data.quote} -- ${res.data.author}
					###################################################################################################
			`);
}

quotes();