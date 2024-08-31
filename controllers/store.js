const Store = require('../model/store');

const createstore = async (req,res)=>{
    req.body.createdby = req.user.userid;
    console.log(req.user.userid);
    const {name,address,usage,area,createdby} = req.body;
    if(!name||!address||!usage||!area||!createdby){
        return res.status(400).json({msg:'please provide name and address and usage and area'});
    }
    try {
        const store = await Store.create(req.body);
        res.status(201).json(store);
    } catch (error) {
        res.status(500).json(error);
    }
}    
const getallstores = async (req,res)=>{ 
    try {
        console.log(req.user.userid);
        const store = await Store.find({createdby:req.user.userid});
        res.status(200).json({store,count:store.length});
    } catch (error) {
        //res.status(500).json(error);
        return res.status(400).json({msg:'there is no stores available'});
    }
}
const getstore = async (req,res)=>{
    const id = req.params.id;
    const createdby = req.user.userid;
    try {
        const store = await Store.findOne({_id:id,createdby:createdby});
        res.status(200).json({store,count:store.length});
    } catch (error) {
        //res.status(500).json(error);
        return res.status(400).json({msg:`there is no store with id ${id}`});
    }
}
const updatestore = async (req,res)=>{
    const id = req.params.id;
    const createdby = req.user.userid; 
    try {
        const store = await Store.findByIdAndUpdate({_id:id,createdby:createdby},req.body,{new:true,runValidators:true});
        res.status(200).json({store,count:store.length});
    } catch (error) {
        //res.status(500).json(error);
        return res.status(400).json({msg:`there is no store with id ${id}`});
    }
}
const deletestore = async (req,res)=>{
    const id = req.params.id;
    const createdby = req.user.userid;
    try {
        const store = await Store.findByIdAndDelete({_id:id,createdby:createdby},{new:true,runValidators:true});
        res.status(200).json({store,count:store.length});
    } catch (error) {
        //res.status(500).json(error);
        return res.status(400).json({msg:`there is no store with id ${id}`});
    }
    
}


module.exports = {
    createstore,
    getallstores,
    getstore,
    updatestore,
    deletestore
}