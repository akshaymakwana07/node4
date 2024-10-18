const mongoose = require("mongoose");

const userApi = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    email: {
        type : String,
        required : true
    },

    number: {
        type : Number,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    image : {
        type : String,
        required : true
    },

    createdAt : {
        type : String,
        required : true
    }


})

const UserAPI = mongoose.model("data",userApi);

module.exports = UserAPI;