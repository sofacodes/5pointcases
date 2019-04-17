console.log('Hello World');

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const suggestionsElement = document.querySelector('.suggestions')
const API_URL = 'http://localhost:5000/suggestions'

loadingElement.style.display = '';

listAllSuggestions();

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const name = formData.get('name');
	const content = formData.get('content');

	const suggestion = {
		name,
		content
	};
	
	form.style.display = 'none';
	loadingElement.style.display = '';


	fetch(API_URL, {
		method: 'POST',
		body: JSON.stringify(suggestion),
		headers: {
			'content-type': 'application/json'
		}
	}).then(response => response.json())
	  .then(createdSuggestion => {
	  	form.reset();
	  	form.style.display = '',
	  	loadingElement.style.display = 'none';
	  	listAllSuggestions();
	  });
});

function listAllSuggestions(){
	suggestionsElement.innerHTML = '';
	fetch(API_URL)
		.then(response => response.json())
		.then(suggestions => {
			suggestions.reverse();
			suggestions.forEach(suggestion => {
				const div = document.createElement('div');

				const header = document.createElement('h3');
				header.textContent = suggestion.name;

				const contents = document.createElement('p');
				contents.textContent = suggestion.content;

				const date = document.createElement('small');
				date.textContent = new Date(suggestion.created);

				div.appendChild(header);
				div.appendChild(contents);
				div.appendChild(date);

				suggestionsElement.appendChild(div)
			})
			loadingElement.style.display = 'none';
		})
}