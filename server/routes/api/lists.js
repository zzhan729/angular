const express = require ("express");
const mongdb =require ("mongodb");

const router =express.Router();
//get
router.get("/", async(req,res)=>{
    const list= await loadListCollection();
    res.send(await list.find({}).toArray());
});

//add
router.post("/",async(req,res)=>{
    const list =await loadListCollection();
    await list.insertOne ({
        name:req.body.name,
        price:req.body.price

    });
    res.status(201).send();
});

//delete

router.delete("/:id", async (req,res)=>{
    const list=await loadListCollection();
    await list.deleteOne({_id:new mongdb.ObjectID( req.params.id)});
    res.status(200).send();
});






async function loadListCollection(){
    const client=await mongdb.MongoClient.connect
    ('mongodb://allen:admin123@ds137857.mlab.com:37857/angular_shopping',{
        useNewUrlParser:true
    })

    return client.db('angular_shopping').collection('list');
}


module.exports=router;