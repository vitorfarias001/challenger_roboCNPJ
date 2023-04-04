:computer: Projeto
Criação de uma rota que dispare um robô para consulta de dados a partir de um CNPJ.

Critérios de aceite :
<br>
1 - Disponibilizar uma rota que passe como parâmetro um CNPJ
<br>
2- Assim que disparada a rota, iniciar um robo cujos passos são :
 Inicializar site (o site indicado tinha um captcha , no qual constou erro na aplicação e foi usado o https://www.receitaws.com.br)
<br>
 Realizar a pesquisa de um CPNJ unitariamente disponibilizado pela api, no campo de
pesquisa e o consultar.
<br>
 Devolver as informações consultadas na requisição ( Caso não haja informações,
retornar 204 (no content) com a mensagem “NÃO FORAM ENCONTRADAS
INFORMAÇÕES PARA O CNPJ INFORMADO” )
<br>
A rotina acima deverá ser feita utilizando crawller e request. As bibliotecas utilizadas devem
ser
<br>
 API - FastAPI (para python não foi utulizado como o projeto foi desenvolvido em node )
<br>
 Robô - Playwright e Request

:rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
[Node]
<br>
:gear: Como executar
<br>

    # Clonar o repositório
    $ git clone https://github.com/vitorfarias001/challenger_roboCNPJ
    # Navegar para o diretório
    $ cd challenger_roboCNPJ
    # no terminal rodar yarn para instalar as dependencias 
    # no terminal rodar yarn dev  para rodar o servidor
    $ abra seu postman ou insominia com uma requisição GET
    $ insira a url http://localhost:3000/
    # conforme o desafio a rota disponibilizada é cnpj/:cnpj
    # 41229161000139 como exemplo
    # os arquivos são retornados devidamente na url que voce colocou no postman
    $ http://localhost:3000/cnpj/41229161000139 
