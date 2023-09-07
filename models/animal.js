const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
	name: {
		type: String,
		default: "UNNAMED",
	},
	breed: {
		type: String,
        require: true
	},
    weight: {
        type: Number,
        validate: {
            validator: function (ageValue) {
                return ageValue > 2 && ageValue < 250;
            },
            message: 'Weight should be a number between 2 and 250'
        }
    },
});

module.exports = mongoose.model("Animal", animalSchema);