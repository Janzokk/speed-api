const mongoose = require("mongoose")

const schema = mongoose.Schema({
	game: String,
    category: String,
    time: String,
    date: Date,
    user: String,
    run: String,
})

module.exports = mongoose.model("runs", schema)