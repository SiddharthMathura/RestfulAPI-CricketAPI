const express = require("express");
const router = new express.Router();
const Bowl = require("../modules/bowlingcollection");


router.post("/men-ODI-bowling-rankings",async(req,res)=>{
    try{
        const nplayer = new Bowl(req.body);
        const createplayer = await nplayer.save();
        res.status(201).send(createplayer);
    }catch(err){
        res.status(400).send(err);
    }
})

router.get("/men-ODI-bowling-rankings",async(req,res)=>{
        try{
            const getplayer = await Bowl.find().sort({"ranking":1});
            res.status(201).send(getplayer);
        }catch(err){
            res.status(400).send(err);
        }
})

router.get("/men-ODI-bowling-rankings/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const playerid = await Bowl.findById({_id});
        if(!playerid){
            return res.status(400).send();
        }else{
            res.status(201).send(playerid);
        }
    }catch(err){
        res.status(400).send(err);
    }
})

router.patch("/men-ODI-bowling-rankings/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateplayer = await Bowl.findByIdAndUpdate(_id, req.body,{ new:true });
        if(!updateplayer){
            return res.status(400).send();
        }else{
            res.status(201).send(updateplayer);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

router.delete("/men-ODI-bowling-rankings/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteplayer = await Bowl.findByIdAndDelete(_id, req.body);

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