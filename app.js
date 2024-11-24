

const express= require("express")
const app=express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));

const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const postesRoutes = require("./routes/posts_routes");
app.use("/posts", postesRoutes);

app.listen(port,() =>{
    console.log(`Exemple app listening on port http://localhost:${port}`);
     });

