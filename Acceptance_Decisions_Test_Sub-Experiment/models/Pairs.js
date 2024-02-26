const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pairsSchema = new Schema({
    id: {
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
    HM_1: {
      type: String,
    }, 
    HM_2: {
      type: String,
    },
    Sim_score: {
      type: String,
    }
  });
  
module.exports = mongoose.model("Pairs", pairsSchema);