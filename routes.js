const express = require("express")
const Post = require("./models/Runs")
const router = express.Router()


// Get all games names
router.get("/game", async (req, res) => {
	try {
		const posts = await Post.find().distinct("game")
		res.send(posts)
		console.log("consulta realitzada");
	} catch (error) {
		res.status(500).send({ error: "Internal Server Error" })
	}
})

// Get all games name
router.get("/game/:name", async (req, res) => {
	try {
		const posts = await Post.find({ game: req.params.name })
		res.send(posts)
	} catch (error) {
		res.status(500).send({ error: "Internal Server Error" })
	}
})

// Get user runs
router.get("/game/:name/:user", async (req, res) => {
	try {
		const post = await Post.find({ game: req.params.name, user: req.params.user })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Run doesn't exist!" })
	}
})

module.exports = router;