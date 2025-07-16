import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
})

const MONGO_URL = 'mongodb+srv://c00ln4work:c00l@cluster0.ex6tapr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.Promise = Promise;
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('✅ MongoDB Connection Successful');
    } catch(error) {
        console.log('❌ MongoDB Connection Failed : ', error);
    }
    mongoose.connection.on('error', (error: Error) => console.log(error));
}

connectDB();

app.use('/', router());