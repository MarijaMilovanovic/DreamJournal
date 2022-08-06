import express from 'express';
import getDreamTypes from '../controllers/dreamTypes';

const router = express.Router()

router.get('/', getDreamTypes)

export default router