const Farm = require("../models/farm.js");
const Animal = require("../models/animal.js")
module.exports = {
	createFarm: async function (req, res) {
		let objFarm = new Farm({ name: req.body.name, address: req.body.address});
		await objFarm.save();
		res.status(200).json(objFarm);
	},
	addAnimal: async function (req, res) {
        let animalId = req.body.animalId;
        let farmId = req.body.farmId;
        let tAnimal = await Animal.findOne({_id: animalId});
        let tFarm = await Farm.findOne({_id: farmId});
        tFarm.animals.push(tAnimal._id);
		await tFarm.save();
        res.status(200).json(tFarm);
	},
	deleteAnimal: async function (req, res) {
        let animalId = req.body.animalId;
        let farmId = req.body.farmId;
        let tFarm = await Farm.findOne({_id: farmId});
        let indexOfAnimal = tFarm.animals.indexOf(animalId);
        tFarm.animals.splice(indexOfAnimal, 1);
		await tFarm.save();
        res.status(200).json(tFarm);
	},
};
