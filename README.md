# Api de Agendamento de serviços

**O projeto deverá cadastrar Serviços, agendar/solicitar serviços com data e hora, Avaliação e Comentário.**


# ROTAS PRIVADAS (precisa de login)

## criar um prestador de serviços

**RF**

* Deve ser possivél criar um usuario prestador de serviços.

**RN**

* O usuario prestador de serviços deve ser criado por outro prestador de serviços autenticado.
* Não deve ser possivél cadastrar um já cadastrado.

**RNF**

* Deve ser usado token jwt para autenticar a rota.


## Listar serviços do prestador

**RF** 

* o prestador deve poder listar seus serviços.


**RN**

* O oprestador precisa estar autenticado

**RNF**

* Deve ser usado token jwt para autenticar a rota.


## Alterar serviço

**RF** 

* o prestador deve poder alterar seus serviços


**RN**

* O prestador de serviços não pode alterar um serviço que não foi criado por ele.
* O prestador de serviços não pode alterar um serviço que não exista.


**RNF**

* Deve ser usado token jwt para autenticar a rota.


## Desabilitar o serviço

**RF**

* o prestador de serviço deve poder Desabilitar seus serviços

**RN**

* O prestador de serviços não pode desabilitar um serviço que não foi criado por ele.
* O prestador de serviços não pode desabilitar um serviço que não exista.


**RNF**

* Deve ser usado token jwt para autenticar a rota.


## Deletar o serviço

**RF**

o prestador de serviço deve poder Deletar seu serviço


**RN**

* O prestador de serviços não pode deletar um serviço que não foi criado por ele.
* O prestador de serviços não pode deletar um serviço que não exista.


**RNF**

* Deve ser usado token jwt para autenticar a rota.


## criar serviço

**RF**

* O prestador deve poder um ou mais criar serviço.


**RN**

* O Prestador não deve poder criar um serviço ja exixtente


**RN**

O serviço deve ser criado pelo usuario administrador.

**RNF**

* Deve ser usado token jwt para autenticar a rota.


## alterar dados usuario

**RF**

* O usuario deve poder editar seu  perfil.

**RN**

* O usuario não pode alterar seu cadastro com um email já em uso.
* O usuario precisa existir.


**RNF**

* Deve ser usado token jwt para autenticar a rota.


## agendar/solicitar serviço

**RF**

* O usuario deve ser poder agendar/solicitar um serviço


**RN**

* O usario deve existir.


**RNF**

* Deve ser usado token jwt para autenticar a rota.


## listar agendamentos/solicitaçẽos

* O usuario deve ser poder listar agendametos/solicitações de serviços.


**RN**

* O usario deve existir.


**RNF**

* Deve ser usado token jwt para autenticar a rota.



# ROTAS PUBLICAS (sem login)

## criar usuario 

**RF**

* Deve ser possivél usuario fazer seu proprio cadastro.


**RN**

* O usuario não pode criar seu cadastro com um email já em uso.



## listar serviços 

**RF**

* Deve ser possivél listar serviços


##  Procurar serviço

**RF**

Deve ser possivél buscar serviço pelo nome 
Deve ser possivél buscar serviço pelo tipo/Categoria






