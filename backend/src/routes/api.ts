import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import { Auth } from "../middlewares/auth";


const router = Router();

router.post('/register', Auth.private, ApiController.createGames);

router.get('/', ApiController.All)

router.get('/:id', Auth.private, ApiController.findOne)


router.delete('/delete/:id',Auth.private, ApiController.deleteGames)
router.put('/edit/:id',Auth.private, ApiController.editGames)




export default router;

