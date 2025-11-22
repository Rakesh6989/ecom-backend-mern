import mongoose from "mongoose";
const emailsubs = mongoose.Schema(
  {
    email: {
      require: true,
      type: String,
      trim: true,
    },
  },

  { timestamps: true }
);

const subsc=emailsubs.model()