import dotenv from "dotenv";
dotenv.config();

const jwtConfig = {
  jwt_access_key: process.env.jwt_access_key,
  jwt_access_key_expire: process.env.jwt_access_key_expire,
  jwt_refresh_key: process.env.jwt_refresh_key,
  jwt_refresh_key_expire: process.env.jwt_refresh_key_expire,
};

export default jwtConfig;
