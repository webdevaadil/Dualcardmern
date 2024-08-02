const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  recieved: {
    type: String,
    // required: true,
  },
  result:{
type:String,
default:"pending"
  },
  winner:{
    type:String,
    default:"pending"
  },
  loser:{
    type:String,
    default:"pending"
  },
  Accept: {
    type: String,
    default:"pending"
    // required: true,
  },
  player_1_id:{
type:String
  },
  player_2_id:{
    type:String
  },

  player_1:[
    {
      text: {
        type: String,
      },
      link:{
        type:String
      },
      images:{
            type:Array,
            required: true,  
        },
        
      userId: {
        type: String,
      },
      status:{
        type:String,
        default:"pending"
      },
      name:{
        type:String
      }
    },
  ],
  player_2: [
    {
      text: {
        type: String
      },
      link:{
        type:String
      },
      images:{
        type:Array,
        required: true,  
    },
      userId: {
        type: String
      },
      status:{
        type:String,
        default:"pending"
      },
      name:{
        type:String
      }
    },
  ],
});

const challenge = mongoose.model("challenge", challengeSchema);
module.exports = challenge;
