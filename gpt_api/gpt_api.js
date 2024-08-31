'use strict';
let dotenv = require('dotenv');
dotenv.config();

<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const path = require('path');
const OpenAI = require('openai');

const app = express();

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

// Define the directory containing the static files
const publicDirectoryPath = path.join(__dirname, '/');

// Serve static files from the 'assets' directory
app.use('/', express.static(publicDirectoryPath));

// Serve the 'index.html' file from the root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/getchat', async (req, res) => {
	console.log(req.body);
	let prompt = req.body.content;

	try {
		// Wywołanie API OpenAI
		let completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{ role: 'system', content: 'capital city of Poland' },
				{ role: 'user', content: prompt },
			],
		});

		return res.send(completion.choices[0].message.content);
	} catch (error) {
		return res.status(500).send('Something went wrong');
	}
});

app.listen(3005, () => {
	console.log('Server is running on port 3005');
=======
// let express = require('express');
// let bodyParser = require('body-parser');
// let OpenAI = require('openai');
// const cors = require('cors');

// const openai = new OpenAI({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

// const app = express();

// const router = express.Router();

// app.use(cors());

// app.use(bodyParser.json());

// // app.get('/', async (req, res) => {
// // 	let content = await main();
// // 	res.send(content);
// // });

// app.post('/getchat', async (req, res) => {
// 	try {
// 		console.log(req.body);
// 		let role = req.body.role;
// 		let request = req.body.content;
// 		console.log(role, request);
// 		// let content = await main(role, request);
// 		// res.send(content);
// 	} catch (error) {
// 		console.log('Error occurred:', error);
// 		res.status(500).send('Something went wrong!');
// 	}
// });

// let port = process.env.PORT || 3000;

// app.listen(port, () => {
// 	console.log(`server is running on http://localhost:${port}`);
// });

// async function main(role, request) {
// 	// role = 'user';
// 	// request = 'capital of France?';
// 	console.log(role, request);
// 	let completion = await openai.chat.completions.create({
// 		model: 'gpt-3.5-turbo',
// 		messages: [
// 			{ role: 'system', content: 'capital city of Poland' },
// 			{ role: role, content: request },
// 		],
// 	});

// 	console.log(completion.choices[0].message.content);
// }
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3005; // lub inny port, jeśli używasz innego
app.use(cors());

// Middleware do przetwarzania JSON w body zapytania
app.use(bodyParser.json());

// Router obsługujący żądania POST na '/getchat'
app.post('/getchat', (req, res) => {
	console.log(req.body); // Wypisanie danych z ciała żądania
	res.json({ message: 'Dane odebrane pomyślnie' }); // Odpowiedź do klienta
});

// Startowanie serwera na określonym porcie
app.listen(port, () => {
	console.log(`Serwer działa na porcie ${port}`);
>>>>>>> 546b6aa99738f3ec27f93174f8936a038f2fac2f
});
