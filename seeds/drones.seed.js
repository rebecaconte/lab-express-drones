// Iteration #1

// -- connect the DB --
require('../db')

// -- create Drone items to add to the collection --
const myDrones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]

// -- insert drone items to the DB --

const mongoose = require('mongoose')
const Drone = require('../models/Drone.model.js')

Drone.create(myDrones)
.then(() => {
    console.log("YAY! Everything working - Super Cool!");
    //close connection with database
    mongoose.connection.close()
})
.catch((err) => {
    console.log("There is a problem adding the info: " + err)
})


