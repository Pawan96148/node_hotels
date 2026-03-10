const express =require('express');
const router= express.Router();
const Person = require('../models/Person');

//POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = (req.body); // Assuming the request data contain the person data...

    // create a new Person document using mongoose model..
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved', response);
    res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});


//GET route to get the person
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched', data);
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
});

//GET route to get the person and adding parameter with workType....
router.get('/:workType',async(req,res)=>{  //Extract the workType from the URL parameter (PARAMETERISED API CALLS)....
    try{
    const workType=req.params.workType;
    if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
        const response= await Person.find({work:workType});
        console.log('response fetched..');
        res.status(200).json(response);

    }else{
        res.status(404).json({error:'Invalid workType'});
    }
}catch(err){
    console.error('Error fetching person:',err);
    res.status(500).json({error:'Internal server Error'})
}
    
});

router.put('/:id',async(req,res)=>{
    try {
        const personID=req.params.id; // Extract the ID from the URL parameter
        const updatedPersonDATA=req.body; // Updated DATA from the person

        const response= await Person.findByIdAndUpdate(personID,updatedPersonDATA,{
            new:true, // return the updated document
            runValidators:true, //run Mongoose Validation
        })
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }



        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.error('Error Fetching Person');
        res.status(500).json({error:'Internal server Error'})
    }
});

router.delete('/:id', async (req,res)=>{
    try {
        const personID=req.params.id;

        const response= await Person.findByIdAndDelete(personID)
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message:'Person deleted successfully'});
    } catch (err) {
        console.log(err)
        res.status(500).json({error:'Internal server Error'});
    }
});

module.exports = router;
