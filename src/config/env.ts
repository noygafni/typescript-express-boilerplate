import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    //   db: {
    //     host: process.env.DB_HOST,
    //     port: Number(process.env.DB_PORT),
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     name: process.env.DB_NAME,
    //   },
    //   redis: {
    //     host: process.env.REDIS_HOST,
    //     port: Number(process.env.REDIS_PORT),
    //   },
    //   jwtSecret: process.env.JWT_SECRET || 'default_secret',
};
