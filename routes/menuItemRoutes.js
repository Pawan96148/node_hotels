const express =require('express');
const router= express.Router();
const MenuItem = require('../models/MenuItem');// MenuItem Model

// POST MenuItem
router.post('/', async (req,res)=>{
    try{
        const menuItem = new MenuItem(req.body);
        const response = await menuItem.save();

        console.log('MenuItems created successfully', response);
        res.status(200).json(response);

    }catch(err){
        console.error('Error creating MenuItems:',err);
        res.status(500).json({error:'Internal Server Error'})
    }
});


// GET All MenuItems
router.get('/', async (req,res)=>{
    try{
        const menuItems = await MenuItem.find();

        console.log('All MenuItems:',menuItems);
        res.status(200).json(menuItems);

    }catch(err){
        console.error('Error fetching MenuItems:',err);
        res.status(500).json({error:'Internal Server Error'})
    }
});


// GET MenuItems by Taste
router.get('/:tasteType', async(req,res)=>{
    try{

        const tasteType = req.params.tasteType;

        if(tasteType=="sweet" || tasteType=="spicy" || tasteType=="sour"){

            const response = await MenuItem.find({taste:tasteType});

            res.status(200).json(response);

        }else{

            res.status(404).json({error:'Invalid tasteType'});
        }

    }catch(err){

        console.error(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

module.exports=router;