import dotenv from "dotenv";

// ENV config
dotenv.config()

if (!process.env.DATABASE_URI) {
    throw new Error("Can not load database url!");
}

const config = {
    DB_URI : process.env.DATABASE_URI
}

export default config;