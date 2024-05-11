const mongoose=require('mongoose');

const foodModel=require('../models/food');
const tableModel=require('../models/table');


module.exports=class Service {

    //food command

    static food = async (req, res, next) => {
    try{
        const f=req.body.service;
        const cr=req.body.crust;
        const t=req.body.toppings;
        const ch=req.body.cheese;
        const o=req.body.others;
        const n =req.body.note;
        const newfood=new foodModel({
             food:f,
             crust:cr,
             toppings:t,
             cheese:ch,
             others:o,
             note:n
        })
        await newfood.save();

        const id=newfood._id;
        res.status(201).json({id});



    }catch(err){
        console.log(err)
res.status(500).send("Internal Server Error: " + err);    }


}

    //table reservation

static table = async (req, res, next) => {
    try{
        const n=req.body.name;
        const e=req.body.email;
        const d=req.body.date;
        const p=req.body.people;
        const s=req.body.special;

        const newtable=new tableModel({
             name:n,
             email:e,
             date:d,
             people:p,
             special:s
        })
        await newtable.save();

        const id=newtable._id;
        res.status(201).json({id});



    }catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error: " + err);    }


}







}