const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)

// INDEX
router.get(`/`, (req, res) => {
    Restaurant.find({city: `Dubai`}, (err, dubaiRestaurants) => {
        if (err) {
            console.log(err)
        }
        res.render(`index.ejs`, {
            restaurant: dubaiRestaurants
        })
    })
})

// NEW
router.get(`/new`, (req, res) => {
    res.send(`New`)
})

// CREATE
router.post(`/`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

// SHOW
router.get(`/:id`, (req, res) => {
    res.send(`Show`)
})

// EDIT
router.get(`/:id/edit`, (req, res) => {
    res.send(`Edit`)
})

// UPDATE
router.put(`/:id`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

// DESTROY
router.delete(`/:id`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

module.exports = router