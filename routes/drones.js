const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js')

// *** GETTING/READING A LIST OF DRONES ***

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find({})
  .then((drones) => {
    console.log(drones);
    // are we not supposed to provide only the file name, NOT the path? 
    // lost lot of time trying to figure this out 
    res.render('drones/list.hbs', {drones})
  })
  .catch((err) => {
    console.log("drones not found")
  })
});

// *** CREATE NEW DRONE ***

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body
  console.log(name, propellers, maxSpeed);

  Drone.create({name, propellers, maxSpeed})
  .then((data) => {
    res.redirect('/drones')
  })
  .catch((err) => console.log(err))
});

// *** EDIT A DRONE ***


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params

  Drone.findById(id)
  .then((data) => {
    res.render('drones/update-form.hbs', {data})
  })
  .catch((err) => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then((data) => {
    res.redirect('/drones')
  })
  .catch((err) => console.log(err))
});

// *** DELETE A DRONE ***

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  
  Drone.findByIdAndDelete(id)
  .then((data) => {
    res.redirect('/drones')
  })
  .catch((err) => console.log(err))
});

module.exports = router;
