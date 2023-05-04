const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) =>{
    res.send("Food is running")
});

app.get("/chefs", (req, res) =>{
    res.send(chefs);
});

app.get("/chefs/:id", (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedChefs = chefs.find(c => c.id == id);
    res.send(selectedChefs)
});

app.listen(port, () => {
    console.log(`food point API is running on port: ${port}`);
})