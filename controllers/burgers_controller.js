const express = require("express");
const router = express.Router();

let burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burger/:id", (req, res) => {
    let burgerID = req.params.id;

    burger.updateOne(burgerID, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router; 