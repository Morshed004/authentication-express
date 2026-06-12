import dotenv from "dotenv";

// ENV config
dotenv.config()

if (!process.env.DATABASE_URI) {
    throw new Error("Can not load database url!");
}
if (!process.env.SECRETS) {
    throw new Error("Can not load secret!");
}

const config = {
    DB_URI : process.env.DATABASE_URI,
    secret: process.env.SECRETS
}

export default config;