import dotenv from "dotenv"
dotenv.config();

export const appConfig = {
    port: process.env.PORT || 3004,
    host: process.env.HOST
}