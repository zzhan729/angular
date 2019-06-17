const express = require ("express");
const mongdb =require ("mongodb");

const router =express.Router();
//get
router.get("/", async(req,res)=>{
    const accounts= await loadAccountsCollection();
    res.send(await accounts.find({}).toArray());
});

//add
router.post("/",async(req,res)=>{
    const accounts =await loadAccountsCollection();
    await accounts.insertOne ({
        name:req.body.name,
        password:req.body.password

    });
    res.status(201).send();
});

//delete

router.delete("/:id", async (req,res)=>{
    const accounts=await loadAccountsCollection();
    await accounts.deleteOne({_id:new mongdb.ObjectID( req.params.id)});
    res.status(200).send();
});






async function loadAccountsCollection(){
    const client=await mongdb.MongoClient.connect
    ('mongodb://allen:admin123@ds137857.mlab.com:37857/angular_shopping',{
        useNewUrlParser:true
    })

    return client.db('angular_shopping').collection('accounts');
}


module.exports=router;