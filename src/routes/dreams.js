import express from 'express';
import createDream from '../controllers/dreams/createDream';
import deleteDream from '../controllers/dreams/deleteDream';
import getDreams from '../controllers/dreams/getDreams';
import updateDream from '../controllers/dreams/updateDream';

const router = express.Router()

router.route('/')
    .post(createDream)
    .get(getDreams)
    .delete(deleteDream)
    .patch(updateDream)

export default router