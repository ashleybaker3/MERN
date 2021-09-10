const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: "Something went wrong here", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.find({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong here", error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCraftedJoke) => {
            res.json(newlyCraftedJoke);
        })
        .catch(err => res.json({ message: "Something went wrong here", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: "Something went wrong here", error: err }));
};

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong here", error: err }));
};