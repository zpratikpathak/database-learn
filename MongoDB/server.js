const express = require('express');
const {MongoClient} = require('mongodb');


const connectingString = "mongodb://localhost:27017";

async function init() {
    const client = new MongoClient(connectingString,{
        useUnifiedTopology: true})

        await client.connect();

        const app = express();

        app.get("/get", async(req,res)=>{
            const db = await client.db("adoption");
            const collection = db.collection("pets");

            const pets = await collection.find({
                $text: {$search: req.query.search },
            },
                {_id:0}
            )
            .sort({score: {$meta: "textScore"}})
            .limit(10)
            .toArray()

            res.json({status:"ok",pets}).end();
        })

        app.use(express.static('./static'))
    const PORT = 3000;
    app.listen(PORT);
    console.log(`Running on http://localhost:${PORT}`);
}
init();