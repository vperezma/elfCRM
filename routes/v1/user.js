import Router from 'express';
const router = Router();
import * as userController from '../../controllers/user';

console.log(userController);
/* GET users listing. */
router.route('/')
    .post(userController.create)
    .get(userController.getAll)
            
router.route('/:userId')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.destroy)




export default router;