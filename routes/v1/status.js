import Router from 'express';
const router = Router();
import * as statusController from '../../controllers/status';

console.log(statusController);
/* GET statuss listing. */
router.route('/')
    .post(statusController.create)
    .get(statusController.getAll)
            
router.route('/:statusId')
    .get(statusController.getById)
    .put(statusController.update)
    .delete(statusController.destroy)




export default router;