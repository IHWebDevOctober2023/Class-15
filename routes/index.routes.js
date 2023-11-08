const express = require('express');
const router = express.Router();
const Character = require('../models/character.model');
const Episode = require('../models/episode.model');

/* GET home page */
router.get("/", (req, res, next) => {
  Promise.all([Character.find(), Episode.find()])
    .then(([characters, episodes]) => {
      res.render("home", { characters, episodes });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/character/add-to-episode", (req, res) => {
  const { characterId, episodeId } = req.body;

  Promise.all([
    Character.findByIdAndUpdate(characterId, { $push: { episodes: episodeId } }),
    Episode.findByIdAndUpdate(episodeId, { $push: { characters: characterId } })
  ])
    .then(() => {
      res.render("success");
    })
    .catch((error) => {
      console.log(error);
    });

});

module.exports = router;
