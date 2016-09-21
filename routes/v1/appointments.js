import Router from 'express';
const router = Router();
import * as appointmentsController from '../../controllers/appointment';

console.log(appointmentsController);
/* GET appointments listing. */
router.route('/')
    .post(appointmentsController.create)
    .get(appointmentsController.getAll)
            
router.route('/:appointmentsId')
    .get(appointmentsController.getById)
    .put(appointmentsController.update)
    .delete(appointmentsController.destroy)




export default router;