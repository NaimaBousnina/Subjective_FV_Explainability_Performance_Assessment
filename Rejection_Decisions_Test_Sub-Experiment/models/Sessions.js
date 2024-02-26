const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
    id: {
      type: String,
      required: true,
      unique: true, 
      index: true,
    },

    name:{
      type: String
    },

    age:{
      type: Number
    },

    gender:{
      type: String
    },

    email: {
      type: String, 
      required: true,
      unique: true, 
      index: true,
    },

    order: {
      type: [Number],
    },

    judgments: {
      type: [Number],
    },

    time:{
      type: [Date],
    },

    current:{
      type: Number,
    },

    display:{
      type: Number
    },

    resolution:{
      type:[Number]
    }, 
    
    dict: {
      type: Array,
    }
  });
  
module.exports = mongoose.model("Sessions", testSchema);