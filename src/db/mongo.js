import mongoose from "mongoose";
import dbConfig from "../config/db.config.js";


export async function mongo() {
    await mongoose.connect(dbConfig.dbURL);
}