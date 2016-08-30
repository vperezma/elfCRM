import { Router } from 'express';
const router = Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('testing 1, 2, 3');
});

export default router;
