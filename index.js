const express = require('express');
const cors = require('cors');
const monk = require('monk');



const app = express();


const db = monk('localhost/5pointcaseskeg');
const suggestions = db.get('suggestions');

app.use(cors());
app.use(express.json());

app.get('/', (req, res ) => {
	res.json({
		message: 'Thank You!'
	});

});

app.get('/suggestions', (req, res) => {
	suggestions
		.find()
		.then(suggestions => {
			res.json(suggestions);
		})
})

function isValidSuggestion(suggestion) {
	return suggestion.name && suggestion.name.toString().trim() !== '' &&
	suggestion.content && suggestion.content.toString().trim() !== '';
}



app.post('/suggestions', (req, res ) => {
	if (isValidSuggestion(req.body)) {
		const suggestion = {
			name: req.body.name.toString(),
			content: req.body.content.toString(),
			created: new Date()
		};

console.log (suggestion)
		suggestions
			.insert(suggestion)
			.then(createdSuggestion => {
				res.json(createdSuggestion);
			});
	} else {
		res.status(422);
		res.json({
			message: 'Name and Suggestion are required!'
		});
	}
})

app.listen(5000, () => {
	console.log('Listening on http://localhost:5000')
});