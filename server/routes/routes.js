import express from 'express';

import { userSignup, userLoginIn } from '../controller/user-controller.js';
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLoginIn);

export default router;