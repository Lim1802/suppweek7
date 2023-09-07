const mongoose = require("mongoose");
const express = require("express");
const animalCont = require("./controllers/animal-controller");
const farmCont = require("./controllers/farm-controller");


const app = express();
app.listen(8080);

app.use(express.json());

const url = "mongodb://127.0.0.1:27017/week7-labAssessment";

async function connect(url) {
	await mongoose.connect(url);
	return "Connected Successfully";
}

connect(url)
	.then(console.log)
	.catch((err) => console.log(err));

app.post("/farm", farmCont.createFarm);
app.post("/animal", animalCont.createAnimal);
app.put("/farm", farmCont.addAnimal);
app.delete("/farm", farmCont.deleteAnimal);