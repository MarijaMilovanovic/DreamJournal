import express from 'express';

const router = express.Router()

router.get('/', async (req, res) => {
    res.json({ status: true, message: "dreams will go here!" })
})

export default router