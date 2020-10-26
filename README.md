[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mecassauro_covinfo-backend&metric=coverage)](https://sonarcloud.io/dashboard?id=mecassauro_RADAR-backend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=mecassauro_covinfo-backend&metric=bugs)](https://sonarcloud.io/dashboard?id=mecassauro_RADAR-backend)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mecassauro_covinfo-backend&metric=alert_status)](https://sonarcloud.io/dashboard?id=mecassauro_RADAR-backend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=mecassauro_covinfo-backend&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=mecassauro_RADAR-backend)
[![Build Status](https://travis-ci.org/mecassauro/covinfo-backend.svg?branch=master)](https://travis-ci.org/mecassauro/covinfo-backend)

# Covinfo Back-end

<p align="center">
  <img src="./img/logo.svg" alt="logo">
</p>

O Back-end do projeto **Covinfo** é a camada que recebe as requisições do front-end, faz validações de regras de negócio e se integra diretamente ao banco de dados PostgreSql.

## Tecnologias utilizadas

1. [Node JS](https://nodejs.org/en/)
2. [Docker](https://www.docker.com/what-docker)
3. [PostgreSql](https://www.postgresql.org/)

## Rodando da aplicação

O projeto ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente, afim de evitar problemas de compatibilidade de sistema. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

1) Instalação do [Docker](https://docs.docker.com/engine/installation/)
2) Instalação do [Docker Compose](https://docs.docker.com/compose/install/)
3) Siga as seguintes etapas:

Clone o repositório:

 ```
 git clone https://github.com/mecassauro/covinfo-backend.git
 ```

Crie uma conexao local do docker na sua máquina para que o docker do front e backend possam se comunicar:
 ```
 docker network create network-api
 ```

Crie e inicie os containers dos serviços:

 ```
 docker-compose build
 docker-compose up
 ```

Ao terminar de usar os serviços, user o seguinte comando para para-los:
 ```
 docker-compose down
 ```

Acesse a aplicação na porta 3333 do seu `browser`: [http://localhost:3333]()

## Análise estática do código

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=mecassauro_covinfo-backend)

 ## Como contribuir com o projeto?

 <details><summary><b>Contribuição</b></summary>
 1. <a href="https://github.com/mecassauro/RADAR-frontend/blob/master/docs/CONTRIBUTING.md">Guia de Contribuição</a>
 </details>

<details><summary><b>Código de Conduta</b></summary>
1. <a href="https://github.com/mecassauro/RADAR-frontend/blob/master/docs/CODE_OF_CONDUCT.md">Código de Conduta</a>
</details>

<details><summary><b>Políticas de Contribuição</b></summary>
1. <a href="https://github.com/mecassauro/docs/blob/master/docs/gcs.md">Política de branchs/commits/</a>
</details>





