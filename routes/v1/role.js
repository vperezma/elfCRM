import Router from 'express';
const router = Router();
import * as roleController from '../../controllers/role';

console.log(roleController);
/* GET roles listing. */
router.route('/')
    .post(roleController.create)
    .get(roleController.getAll)
            
router.route('/:roleId')
    .get(roleController.getById)
    .put(roleController.update)
    .delete(roleController.destroy)




export default router;