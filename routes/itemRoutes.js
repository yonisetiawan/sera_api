const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');

router.get('/', (req, res, next)=>{
    async function findAll(){
        var result = await Item.find({});
        res.send(result)
    }
    findAll()
})

router.post('/', (req, res, next)=>{
    const data = new Item({ name: req.body.name, description: req.body.description });
    data.save().then((err, result) => {
        if(result)res.send(result)
        else res.send(err)
    });
})

router.put('/', (req, res, next)=>{
    async function updateData(){
        var result = await Item.findByIdAndUpdate(req.body.id, {name: req.body.name, description: req.body.description});
        res.send(`${result._id} : Edited`)
    }
    updateData()
})

router.delete('/', (req, res, next)=>{
    async function deleteData(){
        var result = await Item.findByIdAndDelete({_id: req.body.id});
        res.send(result)
    }
    deleteData()

})

module.exports = router;
