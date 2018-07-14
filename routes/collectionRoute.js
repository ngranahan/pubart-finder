const axios = require('axios');
const express = require('express');
const Collections = require('../models/collections');
const Artwork = require('../models/art');

const router = express.Router();


router.get('/collections', function (req, res) {
    //console.log("REQ: ", req)

});
    
    
    



        //     else {
        //         res.json(false);
        //     }
        // });



//     // console.log("COLLECTIONS HIT ON BACK END!");
    
//     Collections.find( { artworks: { $exists: true } } )
//     .then(

//     )
//     Collections.find( { artworks: { $exists: true,
        
      
//     if (req.collections) {
//         res.json({ collections: req.collections });
//         // console.log(collections);
//     }
//     else {
//         res.json(false);
//     }
// });

// router.post('/add/collections', function (req, res) {
//     console.log("req.body.id", req.body.id);
//     var id = req.body.id;
//     Artwork.findById(id, (err,res) => {
//         if(err){
//             console.log(err);
//         } else {
// Collection.findAndUpdate(
//     { title: response.data.body.title.display },
//     artwork,
//     { upsert: true, new: true, runValidators: true })
//     .then((dbArtwork) => {
//         // console.log(dbArtwork);
//     })
// )

// console.log("PICTURE FORM QUERY: ",res)
//         }
//     });  
//     res.redirect("/collections"); 
// });


router.get('/artwork/:id', (req, res) => {
    Collections.save(req.params.id, (err, dbCollections) => {
        console.log("artwork id", req.params.id);
        if (err) {
            return res.json(err);
        }

        res.json(dbCollections);
        console.log(res.json);
    } );
});


// router.get('/get/id', function (req, res) {
//     console.log("req.body.id", req.body.id);
//     // var id = req.body.id;
//     // User.findId(id, (err,res) => {
//     //     if(err){
//     //         console.log(err);
//     //     } else {
//     //     console.log("User id");
//     // }}
// });














module.exports = router;