import { Request, Response } from 'express';
import { consultarCnpj } from '../models/index';

export async function consultarCNPJController(req: Request, res: Response) {
  const cnpj = req.params.cnpj;
  
  try {
    const dadosCNPJ = await consultarCnpj(cnpj);

    if (dadosCNPJ) {
      res.status(200).json(dadosCNPJ);
    } else {
      res.status(204).send('NÃO FORAM ENCONTRADAS INFORMAÇÕES PARA O CNPJ INFORMADO');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('NÃO FORAM ENCONTRADAS INFORMAÇÕES PARA O CNPJ INFORMADO');
  }
}
