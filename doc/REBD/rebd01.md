# C1 : Introdução


## Descrição do trabalho

Com este relatório o grupo visa aqui apresentar toda a informação relativamente ao sistema a desenvolver, bem como todas as especificações por este requeridas, num formato concreto e por extenso, de forma a verificar que todos os elementos aqui presentes estão completos e em conformidade com o pedido pelo docente da disciplina no enunciado do trabalho.

O trabalho consiste na especificação e desenvolvimento de um sistema que permita informatizar as vendas de uma loja de vestuário. Este sistema é extremamente necessário para esta loja, dado o crescimento exponencial das suas vendas - que cada vez têm sido mais difíceis de registar. 

Pretende-se que o sistema desenvolvido permita registar as vendas. Assim sendo, cada venda, é responsabilidade de um determinado funcionário e possui: um código da venda e um valor. Existem clientes que optam por fazer uma ficha de cliente. Assim sendo, para as fazer é necessário que o cliente forneça: o nome, o telemóvel e o código-postal. Após o seu preenchimento é atrbuído um número a cada cliente. Ora, é importante referir que a sistematização dos códigos postais dos clientes é algo bastante importante para os donos da loja, pois permite-lhes saber quais são as melhores localizações para as futuras lojas.  

Relativamente aos funcionários, estes são identificados pelo(/a): código de funcionário, tipo de funcionário (ou seja, se é um gerente ou um lojista), nome, morada, número de identificação fiscal, número de telemóvel e e-mail. Note-se que, saber qual é o "tipo" do funcionário é fundamental para o funcionamento do sistema, pois apenas os funcionários que são gerentes é que conseguem fazer pedidos a fornecedores.

A loja tem vários fornecedores que garantem o fornecimento dos produtos que esta vende. Cada um destes tem: um código, um nome, uma morada e um código postal. Os produtos fornecidos são todos made in Portugal, de forma a apoiar o comércio nacional, e adequam-se a todos os gostos e tamanhos. Assim, podemos encontrar camisolas, camisas, calças, saias, vestidos, entre muitos outros produtos - cuja distinção é feita através de um código. Para além disso, cada produto também possui um stock em loja, um stock em armazém, um preço e diferentes tamanhos. 

Note-se que, o stock do produto em armazém, corresponde às unidades do produto que existem no armazém de cada loja e não no armazém do fornecedor. Assim, o stock em loja apenas corresponde às unidades do produto que estão expostas.

Caso o cliente pretenda um produto que não tenha stock em loja, o funcionário verificará que o mesmo tem stock em armazém. Caso esteja indisponível no armazém, o cliente poderá fazer uma reserva, da qual irá constar, um número de reserva, o apelido do cliente que a efetuou, o valor e o estado de pagamento (ou seja, se o cliente já efetuou o pagamento da reserva ou não).

Tanto para as reservas de clientes, como para o abastecimento da loja, o gerente faz pedidos dos produtos aos fornecedores. Em cada pedido existe um código, a quantidade desejada e respetivo valor. 


## Descrição dos requisitos do utilizador

As opções disponíveis no sistema dependerão de quem o estiver a utilizar. Assim, numa fase inicial o sistema terá apenas três tipos de atores. 

Previamente ao login na aplicação temos o Funcionário Não Autenticado que, não tendo acesso a qualquer funcionalidade, apenas pode iniciar a sua sessão. 

Após o login temos o ator Funcionário Autenticado que tem acesso às funcionalidades do sistema que lhe estão atribuídas.

Assim, poderá ter acesso às seguintes funcionalidades: consultar as vendas, consultar o stock em armazém e em loja, consultar as reservas feitas (e efetuar outras), consultar as fichas de clientes (e criar novas) e visualizar os pedidos a fornecedores.

Desta forma, como casos de uso para o funcionário autenticado temos, por exemplo: 

### Obter os produtos nos quais, o stock da loja seja maior que 1 unidade:

SELECT codigoProduto, stockloja, descricao, numeroContribuinte FROM leonorvicente.produto where stockLoja > 1;

### Obter os clientes cujo código postal acabe em 001:

select * from leonorvicente.clientes where codigoPostal like '%001%';

### Consultar todos os produtos que tenham stock em armazém:

SELECT * FROM leonorvicente.produto where stockArmazem > 0;

### Consultar (apesar de não conseguir efetuar novos - pois apenas o Gerente consegue) os pedidos efetuados a fornecedores:

SELECT * FROM leonorvicente.produtopedidos where quantidade > 0

Caso o funcionário autenticado seja o gerente da loja, este tem acesso a todas as funcionalidades referidas acima, assim como, tem a capacidade de fazer pedidos a fornecedores. 


---
[< Previous](rebd00.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >](rebd02.md)
:--- | :---: | ---: 
