const mongoose = require("mongoose");
const admin = require("../model/apiSchema");


const Schema = mongoose.Schema;

const managerApi = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    adminId: {
        type: Schema.Types.ObjectId,
        ref: "admin"
    },
});

const Manager = mongoose.model("Manager", managerApi);

module.exports = Manager;
