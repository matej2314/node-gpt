'use strict';
let dotenv = require('dotenv');
dotenv.config();

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
});
