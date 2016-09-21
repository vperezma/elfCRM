import Router from 'express';
const router = Router();
import * as categoriesController from '../../controllers/categories';

console.log(categoriesController);
/* GET categories listing. */
router.route('/')
    .post(categoriesController.create)
    .get(categoriesController.getAll)
            
router.route('/:categoriesId')
    .get(categoriesController.getById)
    .put(categoriesController.update)
    .delete(categoriesController.destroy)




export default router;