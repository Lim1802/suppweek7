const Animal = require("../models/animal.js");

module.exports = {
	createAnimal: async function (req, res) {
		let objAnimal = new Animal({ name: req.body.name, breed: req.body.name, weight: req.body.weight });
		await objAnimal.save();
		res.status(200).json(objAnimal);
	},
};
