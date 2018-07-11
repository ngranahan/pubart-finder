const axios = require('axios');
const express = require('express');
const Collections = require('../models/collections');
const Artwork = require('../models/art');

const router = express.Router();


router.get('/collections', function (req, res) {
    console.log("COLLECTIONS HIT ON BACK END!");
    if (req.collections) {
        res.json({ collections: req.collections });
        console.log(collections);
    }
    else {
        res.json(false);
    }
});



router.get('/add/collections', function (req, res) {
    res.json(true);
});


router.get('/artwork/:id', (req, res) => {
    Artwork.findById(req.params.id, (err, dbArtwork) => {
        if (err) {
            return res.json(err);
        }
        res.json(dbArtwork);
        console.log(res.json);
    } );
});


module.exports = router;