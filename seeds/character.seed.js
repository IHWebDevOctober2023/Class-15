const path = require("path")

require("dotenv").config({path: path.join(__dirname, "../.env")});
const mongoose = require("mongoose");
const Character = require("../models/Character.model")

const URI = process.env.MONGODB_URI
mongoose.connect(URI)
    .then(() => {
        console.log("connected to mongo")
        return Character.deleteMany()
    })
    .then(() => {
        return getCharactersAndInsertThem();
    })
    .catch((error) => console.log(error))
 


function getCharactersAndInsertThem() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((jsonData) => {
            // We need to "clean the data"
            const cleanedArray = [];
            // The array of characters is in jsonData.results

            jsonData.results.forEach(element => {
                const { name, image } = element;
                // This is the same as
                // const name = element.name
                // const image = element.image

                const newObject = { name: name, imageUrl: image, episodes: [] };
                cleanedArray.push(newObject);
            });
            return cleanedArray;
        })
        .then((cleanedArray) => {
            return Character.insertMany(cleanedArray)
        })
        .then((characters) => console.log("Characters created", characters))
        .catch((error) => console.log("YOU ARE A MOGOOSER: ", error))
        .finally(()=> mongoose.connection.close())
}