'use strict';

const responseField = document.querySelector('.response-ai');
const promptfield = document.querySelector('.prompt');
const btnSend = document.querySelector('.btn-send');
const btnClear = document.querySelector('.btn-clear');

btnSend.addEventListener('click', function () {
	sendPostRequest();
	promptfield.value = ' ';
});

btnClear.addEventListener('click', function () {
	document.querySelector('.response-ai').innerHTML = ' ';
});

async function sendPostRequest() {
	try {
		let prompt = document.querySelector('.prompt').value;
		const response = await fetch('http://127.0.0.1:3005/getchat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Nagłówek Content-Type
			},
			body: JSON.stringify({
				content: prompt, // Poprawne ciało żądania
			}),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const responseData = await response.text(); // Odczytaj dane jako tekst
		console.log(responseData); // Wypisz odpowiedź na konsolę
		responseField.textContent = responseData;
	} catch (error) {
		console.error('Error:', error);
	}
}
