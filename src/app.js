import express, { json } from 'express';
import mongoose from 'mongoose';
import dreamRoutes from './routes/dreams'
import dreamTypesRoutes from './routes/dreamTypes'

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.use('/', dreamRoutes)
app.use('/types', dreamTypesRoutes)

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));