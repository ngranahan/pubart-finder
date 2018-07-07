const axios = require('axios');
const express = require('express');
const Artwork = require('../models/art');
const router = express.Router();
const mongoose = require('mongoose');

// Route to call api to grab artwork
router.get('/art/callapi', (req, res) => {
     
    axios.get('http://www.philart.net/api/art/10.json')
        .then((response) => {

            //console.log(response);
            // console.log(response.data.body);

            let artwork = {};

            artwork.artist = response.data.body.artists[0].name;
            artwork.title = response.data.body.title.display;
            artwork.imageurl = response.data.body.pictures[0].large.url;
            artwork.lat = response.data.body.location.latitude;
            artwork.lng = response.data.body.location.longitude;

            Artwork.findOneAndUpdate(
                {title: response.data.body.title.display}, 
                artwork, 
                {upsert: true, new: true, runValidators: true})
                .then((dbArtwork) => {
                    // console.log(dbArtwork);
                })

            return res.json(artwork)

        })
        .catch(err => {
            return res.json(err);
        });
});

// TODO: Route to call database to retrieve artwork
router.get('/art/getart', (req, res) => {
    Artwork.find({})
    .then((dbArtwork) => {
        res.json(dbArtwork);
    })
    .catch(err => {
        return res.json(err);
    })
})

// TODO: Route to call database to retrieve specific work of art
router.get('/artwork/:id', (req, res) => {
    Artwork.findById(req.params.id, (err, dbArtwork) => {
        if (err) {
            return res.json(err);
        }
        res.json(dbArtwork);
    } );
})

module.exports = router;