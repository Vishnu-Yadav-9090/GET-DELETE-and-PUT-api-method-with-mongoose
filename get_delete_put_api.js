require("./config");
const datas = require("./datas")
const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(express.json());

app.post("/",(req,resp)=>{
    let save_data = new datas(req.body);
    let result = save_data.save();
    console.log(req.body);
    console.log(save_data);
    resp.send('all okk');
});

app.get("/", async(req,resp)=>{
    let find = await datas.find();
    resp.send(find);
    console.log(find);
});

app.delete("/:_id",async (req,resp)=>{
    let delete_data = await datas.deleteOne(req.params)
    let find = await datas.find();
    resp.send(find);
    console.log(delete_data)
});

app.put("/:_id",async (req,resp)=>{
    let update_data = await datas.updateOne(
        req.params,
        {$set:req.body}
    );
    let find = await datas.find();
    resp.send(find);
    console.log(update_data);
});


app.listen(4500);
