# stackhub
Projeto frontend do stackhub.

## Criando uma imagem
´`cd stackhub`
`docker build -t stackhub/frontend .

## Execução via container
`docker build -dp 8080:80 --name stackhub_app stackhub/frontend

