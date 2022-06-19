# Api de Agendamento de serviços

**O projeto deverá cadastrar Serviços, agendar/solicitar serviços com data e hora, Avaliação e Comentário.**


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Agendamentos%20de%20Servi%C3%A7os&uri=drive.google.com%2Ffile%2Fd%2F1EGEGlvqi8DQz6Guo7oW-QZqgesXI5XZI%2Fview%3Fusp%3Dsharing)

# ROTAS PRIVADAS (precisa de login)

## criar um prestador de serviços

**RF**

* Deve ser possivél criar um usuario prestador de serviços. [ok]

**RN**

* Não deve ser possivél cadastrar um já cadastrado..  [ok]

**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## Listar serviços do prestador

**RF** 

* o prestador deve poder listar seus serviços. [ok]


**RN**

* O oprestador precisa estar autenticado  [ok]

**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## Alterar serviço

**RF** 

* o prestador deve poder alterar seus serviços [ok]


**RN**

* O prestador de serviços não pode alterar um serviço que não foi criado por ele. [ok]
* O prestador de serviços não pode alterar um serviço que não exista. [ok]



**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## Desabilitar o serviço

**RF**

* o prestador de serviço deve poder Desabilitar seus serviços [ok]

**RN**

* O prestador de serviços não pode desabilitar um serviço que não foi criado por ele. [ok]
* O prestador de serviços não pode desabilitar um serviço que não exista. [ok]


**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## Deletar o serviço

**RF**

* o prestador de serviço deve poder Deletar seu serviço [ok]


**RN**

* O prestador de serviços não pode deletar um serviço que não foi criado por ele. [ok]
* O prestador de serviços não pode deletar um serviço que não exista. [ok]


**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## criar serviço

**RF**

* O prestador deve poder um ou mais criar serviço. [ok]


**RN**

* O Prestador não deve poder criar um serviço ja exixtente. [ok] 


**RN**

O serviço deve ser criado por um usuario prestador de serviço. [ok]

**RNF**

* Deve ser usado token jwt para autenticar a rota.[ok]


## alterar dados usuario

**RF**

* O usuario deve poder editar seu  perfil. [ok]

**RN**

* O usuario não pode alterar seu cadastro com um email já em uso. [ok]
* O usuario não pode alterar outros perfis. [ok]
* O usuario precisa existir. [ok]


**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## agendar/solicitar serviço

**RF**

* O usuario deve ser poder agendar/solicitar um serviço [ok]


**RN**

* O usuario deve existir. [ok]
* O serviço deve existir. [ok]
* O serviço deve pertencer ao provedor de serviço. [ok]


**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## listar agendamentos/solicitaçẽos

**RF**

* O usuario deve ser poder listar agendametos/solicitações dos serviços contratados. [ok]


**RN**

* O usuário deve existir. [ok]

**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]


## Avaliar o serviço

**RF**

* O usuario deve poder avaliar o serviço de 1 a 5. [ok]
* O usario deve poder adicionar um comentario ao serviço fornecido [ok]

**RN**

* O usuario não pode avaliar um serviço ao qual não foi consumido por ele. [ok]


**RNF**

* Deve ser usado token jwt para autenticar a rota. [ok]

# ROTAS PUBLICAS (sem login)

## criar usuario 

**RF**

* Deve ser possivél usuario fazer seu proprio cadastro. [ok]


**RN**

* O usuario não pode fornecer informações invalidas. [implements in test]
* O usuario não pode criar seu cadastro com um email já em uso. [ok]



## listar serviços 

**RF**

* Deve ser possivél listar serviços [ok]


##  Procurar serviço

**RF**

* Deve ser possivél buscar serviço pelo nome [ok]
* Deve ser possivél buscar serviço pelo tipo/Categoria [ok]

----------------------------------------------------------------

## Comandos úteis

**Subir o docker:**
docker-compose up -d --build

**Criar a migration:**
yarn run typeorm migration:create -n CriarUsuario

**Executar a migration:**
yarn run typeorm migration:run

**Reverter a migration:**
yarn run typeorm migration:revert
