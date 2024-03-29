const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainSchema = new Schema({
    idx: {
      type: Number,
      unique: true, 
      index: true,
    },
    Probe: {
      type: String,
    },
    Gallery: {
      type: String,
    },
    HM1: {
      type: String,
    },
    HM2: {
      type: String,
    },
    res: {
        type: Number,
    }
  });
  
module.exports = mongoose.model("Trains", trainSchema);