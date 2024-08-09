const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        name:String,
        class:Number,
        sub:String
    }
);
module.exports = mongoose.model("datas",schema)