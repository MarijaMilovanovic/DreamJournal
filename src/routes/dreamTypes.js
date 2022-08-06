import express from 'express';
import getDreamTypes from '../controllers/dreamTypes';

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const types = getDreamTypes();

        res.statusCode = 200
        res.send(types)
    } catch (error) {
        res.statusCode = 500
        res.send('Something went wrong.')
    }
})

export default router