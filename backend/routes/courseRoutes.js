const express= require('express');
const router= express.Router();
const Course= require('../models/Course');

router.post('/', async (req, res) => {
try
{
const course= new Course(req.body);
await course.save();
res.status(201).json(course);
}
catch(err)
{
res.status(400).json({error: err.message });
}
});

router.get('/', async(req,res)=>{
const courses=await Course.find();
res.json(courses);
});

router.put('/:id', async(req,res)=>{
try
{
const updated=await
Course.findByIdAndUpdate(req.params.id, req.body,{ new: true});
res.json(updated);
}
catch(err)
{
res.status(400).json({error: err.message});
}
});

router.delete('/:id',async(req,res)=>{
try
{
await Course.findByIdAndDelete(req.params.id);
res.json({message:'Deleted successfully'});
}
catch(err)
{
res.status(400).json({error:err.message});
}
});

module.exports=router;