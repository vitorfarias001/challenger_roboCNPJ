import express from 'express';
import { consultarCNPJController } from '../controllers/index';

const router = express.Router();

router.get('/cnpj/:cnpj', consultarCNPJController);

export { router };
