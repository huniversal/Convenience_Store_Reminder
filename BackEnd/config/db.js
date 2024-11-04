import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
    const connectURL = process.env.MONGO_URI;

    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    mongoose.connect(connectURL, { dbName: "datas" })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.log('Failed to connect MongoDB');
            console.error(err);
        });
};

export default connect;