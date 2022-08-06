import express, { json } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import errorHandler from './errorHandler';
import morganMiddleware from './morganMiddleware';
import dreamRoutes from './routes/dreams'
import dreamTypesRoutes from './routes/dreamTypes'

dotenv.config()

const {PORT, DB_URL_LOCAL} = process.env

const app = express();

app.use(json())
app.use(morganMiddleware);

app.use('/', dreamRoutes)
app.use('/types', dreamTypesRoutes)

app.use(errorHandler)

mongoose
	.connect(DB_URL_LOCAL)
	.then(() => {
		app.listen(PORT, (req, res) => console.log(`server is running on port: ${PORT}`))
	})
	.catch(err => console.log(err))