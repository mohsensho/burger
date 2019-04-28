const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.view(data => {
    res.render('index', {burgers: data});
  })
})
router.post('/api/burger', (req, res) => {
  burger.create(req.body.name, (data) => {
    res.json(data.insertId);
  })
})
router.put('/api/burger/:id', (req, res) => {
  burger.devour(parseInt(req.params.id), (data) => {
    if (data.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})

module.exports = router;