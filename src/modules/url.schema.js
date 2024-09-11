import mongoose from "mongoose";
import shortid from "shortid";

const urlSchema1 = new mongoose.Schema(
  {
    full_url: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
      default: shortid.generate(),
    },
  },
  {
    _id: true,
    timestamps: true,
    collection: "urls",
  }
);

export const urlSchema = mongoose.model("urls", urlSchema1);
