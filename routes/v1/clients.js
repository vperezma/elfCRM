import Router from 'express';
const router = Router();
import * as clientsController from '../../controllers/client';

console.log(clientsController);
/* GET clients listing. */
router.route('/')
    .post(clientsController.create)
    .get(clientsController.getAll)
            
router.route('/:clientsId')
    .get(clientsController.getById)
    .put(clientsController.update)
    .delete(clientsController.destroy)




export default router;