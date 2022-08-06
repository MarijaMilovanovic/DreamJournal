import express, { json } from 'express';
import mongoose from 'mongoose';
import dreamRoutes from './routes/dreams'
import dreamTypesRoutes from './routes/dreamTypes'

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;
const dbUrl = "mongodb://localhost:27017/DreamJournal"

app.use('/', dreamRoutes)
app.use('/types', dreamTypesRoutes)

mongoose
	.connect(dbUrl)
	.then(() => {
		app.listen(PORT, (req, res) => console.log(`server is running on port: ${PORT}`))
	})
	.catch(err => console.log(err))