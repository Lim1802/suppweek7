const mongoose = require("mongoose");

const farmSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
        default: "FARM"
	},
	address: {
		type: String,
        required: true
	},
    animals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model("Farm", farmSchema);