
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import allRoutes from './routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const dbURL = process.env.DB;

mongoose.connect(dbURL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("SalonEverywhere Db Connected");
})


app.use('/api',allRoutes);
app.get('**', (req, res) => 
	res.status(200).json({ 
		status: 200, 
		data: `Welcome to SalonEverywhere` 
	}));

app.listen(
    port,
    function(){
        console.log('Server Started on', port);
    }
);


export default app;