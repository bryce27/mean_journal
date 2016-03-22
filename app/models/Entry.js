// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Entry', {
// 	title : {type : String, default: ''},
// 	date : {type : String, default: ''},
// 	content : {type : String, default: ''}
// });


var EntrySchema = new mongoose.Schema({
	title: String,
	date: String,
	content: String,
	weather_icon: String,
	temp: String,
	emotion: String
});

mongoose.model('Entry', EntrySchema);