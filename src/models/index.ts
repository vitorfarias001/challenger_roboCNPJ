import { Browser, chromium, Page } from 'playwright';
import { promisify } from 'util';
import request from 'request';

const wait = promisify(setTimeout);

async function consultarCnpj(cnpj: string) {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage() ;

  try {
    await page.goto(`https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/[^\d]+/g,'')}`), { timeout: 60000 };

    const cnpjValido = await page.evaluate(() => {
      const json = JSON.parse(document.body.innerText);
      return !json.status || json.status !== 'ERROR';
    });

    if (!cnpjValido) {
      return null;
    }

    const dadosCNPJ = await page.evaluate(() => {
      const json = JSON.parse(document.body.innerText);
      const nome = json.nome || '';
      const cnpj = json.cnpj || '';
      const situacao = json.situacao || '';
      const logradouro = json.logradouro || '';
      const numero = json.numero || '';
      const complemento = json.complemento || '';
      const bairro = json.bairro || '';
      const cep = json.cep || '';
      const municipio = json.municipio || '';
      const uf = json.uf || '';
      const telefone = json.telefone || '';
      const email = json.email || '';
      return {
        nome,
        cnpj,
        situacao,
        endereco: {
          logradouro,
          numero,
          complemento,
          bairro,
          cep,
          municipio,
          uf
        },
        telefone,
        email
      };
    });

    return dadosCNPJ;
  } finally {
    await page.close();
    await browser.close();
  }
}

export { consultarCnpj };
