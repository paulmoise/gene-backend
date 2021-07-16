import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authCtrl from './auth/Auth.ctrl'
import createCrudRouter from './crud/crud.router';

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://enigmatik:12345@cluster0.x1bw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).catch((err) => console.error(err))



app.use('/auth', authCtrl());
createCrudRouter(app)


const PORT = process.env.PORT || 4200
app.listen(PORT, () => {
})