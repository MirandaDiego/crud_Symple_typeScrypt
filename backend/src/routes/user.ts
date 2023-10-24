import { Router } from "express";
import * as userController from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/user', userController.createUser);
userRoutes.get('/user', userController.All)
userRoutes.post('/', userController.login)

export default userRoutes;
