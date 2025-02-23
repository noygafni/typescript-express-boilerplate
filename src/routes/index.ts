import { Router } from 'express';
import helloContrller from '../controllers/hello.controller';

const router = Router();

router.get('/', helloContrller.helloWorld);

export default router;
