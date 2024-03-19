const app = require('express')();
const cors = require('cors')

let online = false;

app.use(cors());

app.get(`/`, (req, res) => {
    res.json({ id: online, name: online ? "Gameplay" : "Babyplay" })
})

app.get('/change/:value', (req, res) => {
    console.log(req.params.value)
    if (req.params.value === "true") {
        online = true;
    } else {
        online = false
    }
    res.send(`live web site is ${online ? "Babyplay" : "Gameplay"}`)
});


app.listen(5555, () => {
    console.log(`Server is running at http://localhost:5555`)
})