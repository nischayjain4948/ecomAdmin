const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    uuid:{

      type:String,
      require:true
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);