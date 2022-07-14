import express from "express"
import fetch from "node-fetch"
const app = express();

app.get("/get/:id", (req, res) => {
    (async () => {  
    var f = await fetch("https://pinball3d.github.io/storage/urlredir.json")
    var data = await f.json();
    try {
    res.setHeader("location", data[req.params["id"]]);
    res.sendStatus(301);
    } catch(err) {
        res.sendStatus(400);
    }
      })();
})

app.listen(process.env.PORT || 80);
