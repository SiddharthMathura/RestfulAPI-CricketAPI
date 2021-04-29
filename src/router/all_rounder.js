const express = require("express");
const router = new express.Router();
const Allrounder = require("../modules/allroundercollection");


router.post("/men-ODI-allrounder-rankings",async(req,res)=>{
    try{
        const nplayer = new Allrounder(req.body);
        const createplayer = await nplayer.save();
        res.status(201).send(createplayer);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/men-ODI-allrounder-rankings",async(req,res)=>{
        try{
            const getplayer = await Allrounder.find().sort({"ranking":1});
            res.status(201).send(getplayer);
        }catch(err){
            res.status(400).send(err);
        }
})

router.get("/men-ODI-allrounder-rankings/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const playerid = await Allrounder.findById({_id});
        if(!playerid){
            return res.status(400).send();
        }else{
            res.status(201).send(playerid);
        }
    }catch(err){
        res.status(400).send(err);
    }
})

router.patch("/men-ODI-allrounder-rankings/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateplayer = await Allrounder.findByIdAndUpdate(_id, req.body,{ new:true });
        if(!updateplayer){
            return res.status(400).send();
        }else{
            res.status(201).send(updateplayer);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

router.delete("/men-ODI-allrounder-rankings/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteplayer = await Allrounder.findByIdAndDelete(_id, req.body);

        if(!deleteplayer){
            return res.status(400).send();
        }else{
            res.send(deleteplayer);
        }
    }catch(err){
        res.status(400).send(err);
    }
})


module.exports = router;