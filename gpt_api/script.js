'use strict';

// async function sendPostRequest() {
// 	try {
// 		const response = await fetch('http://127.0.0.1:3005/getchat', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json', // Nagłówek Content-Type
// 			},
// 			body: JSON.stringify({
// 				content: 'Capital of Germany', // Poprawne ciało żądania
// 			}),
// 		});

// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}

// 		const responseData = await response.text(); // Odczytaj dane jako tekst
// 		console.log(responseData); // Wypisz odpowiedź na konsolę
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }

// sendPostRequest();
