import dotenv from 'dotenv';
dotenv.config();
const dbConfig = {
    dbURL: process.env.database_url
}

export default dbConfig