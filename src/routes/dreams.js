import express from 'express';
import createDream from '../controllers/dreams/createDream';

const router = express.Router()

router.route('/')
    .post(createDream)
    .get(async (req, res) => {
        res.json({ status: true, message: "dreams will go here!" })
    })

export default router