
import express from 'express'
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';
import userRoutes from './routes/user';

dotenv.config()
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(apiRoutes, userRoutes)



app.listen(4000, () => console.log('server is running on port 4000'))

