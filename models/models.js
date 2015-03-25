var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var Hotel;
var ThingToDo;
var Restaurant;

var PlaceSchema = new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
});	


var HotelSchema = new Schema({
	name: String,
	place: [PlaceSchema],
	num_stars: Number,
	amenities: String
});
Hotel = mongoose.model("Hotel", HotelSchema);


var ThingToDoSchema = new Schema({
	name: String,
	place: [PlaceSchema],
	age_range: String,
});	
ThingToDo = mongoose.model("ThingToDo", ThingToDoSchema);	


var RestaurantSchema = new Schema({
	name: String,
	place: [PlaceSchema],
	cuisine: String,
	price: Number
});
Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = {
	Hotel: Hotel,
	ThingToDo: ThingToDo,
	Restaurant: Restaurant
};
