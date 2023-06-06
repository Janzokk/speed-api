const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
mongoose.set('strictQuery', true) 

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

mongoose
	.connect("mongodb://127.0.0.1:27017/spidrundotcom", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(express.json())
		app.use(cors(corsOptions)) // Use this after the variable declaration
		app.use("", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})