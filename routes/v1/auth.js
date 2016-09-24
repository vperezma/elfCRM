import Router from 'express';
const router = Router();
import * as userController from '../../controllers/user';

console.log(userController);
/* GET users listing. */
router.route('/')
    .post(userController.getbyEmail)




export default router;