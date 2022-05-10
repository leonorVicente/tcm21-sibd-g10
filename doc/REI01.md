# C1 : Introdução


## Descrição do trabalho

Com este relatório o grupo visa aqui apresentar toda a informação relativamente ao sistema a desenvolver, bem como todas as especificações por este requeridas, num formato concreto e por extenso, de forma a verificar que todos os elementos aqui presentes estão completos e em conformidade com o pedido pelo docente da disciplina no enunciado do trabalho.

O trabalho consiste na especificação e desenvolvimento de um sistema que permita informatizar as vendas de uma loja de vestuário. Este sistema é extremamente necessário para esta loja, dado o crescimento exponencial das suas vendas - que cada vez têm sido mais difíceis de registar. 

Pretende-se que o sistema desenvolvido permita registar as vendas. Assim sendo, cada venda possui: um código da venda, o nome do funcionário responsável, o nome do cliente - assim como, o respetivo número de cliente (caso este possua uma ficha de cliente) - e o valor. Existem clientes que optam por fazer uma ficha de cliente, dado que estas lhes permitem obter algumas vantagens, como por exemplo, um voucher de aniversário e pontos. Assim sendo, para as fazer é necessário que o cliente forneça: o número de cliente, o nome, o telemóvel e o código-postal. Ora, é importante referir que a sistematização dos códigos postais dos clientes é algo bastante importante para os donos da loja, pois, num futuro próximo, tencionam abrir outra loja e, com estes dados, saberão qual será a melhor localização para a mesma. 

Relativamente aos funcionários, estes são identificados pelo(/a): código de funcionário, tipo de funcionário (ou seja, se é um gerente ou um lojista), nome, morada, número de identificação fiscal, número de telemóvel e e-mail. Note-se que, saber qual é o "tipo" do funcionário é fundamental para o funcionamento do sistema, pois apenas os funcionários que são gerentes é que conseguem fazer pedidos a fornecedores.

A loja tem vários fornecedores que garantem o fornecimento dos produtos que esta vende. Cada um destes tem: um código, um nome, uma morada, um código postal e um telefone. Os produtos fornecidos são todos made in Portugal, de forma a apoiar o comércio nacional, e adequam-se a todos os gostos e tamanhos. Assim, podemos encontrar camisolas, camisas, calças, saias, vestidos, entre muitos outros produtos - cuja distinção é feita através de um código. Para além disso, cada produto também possui um stock em loja, um stock em armazém, um preço e diferentes tamanhos. 

Caso o cliente pretenda um produto que não tenha stock em loja, o funcionário verificará que o mesmo tem stock em armazém. Caso esteja indisponível no armazém, o cliente poderá fazer uma reserva, da qual irá constar, um número de reserva, o número do cliente que a efetuou (pois para efetuar uma reserva, o cliente necessita de possuir uma ficha de cliente), o nome do funcionário responsável, o valor e o estado de pagamento (ou seja, se o cliente já efetuou o pagamento da reserva ou não).

Tanto para as reservas de clientes, como para o abastecimento da loja, o gerente faz pedidos aos fornecedores, que são constituídos por um número de pedido, código do produto, quantidade e valor. 

## Modelação do problema

O primeiro pressuposto utilizado na modelação deste problema é que todas as entidades chaves possuem um valor único que não se pode repetir. Desta forma, o número de contribuinte de cada loja não pode ser repetido, o código de cada venda tem que ser único, o número de cliente não se pode repetir, não existem dois produtos com o mesmo código, cada reserva tem um número diferente, não existem pedidos com o mesmo número, os códigos dos fornecedores são todos diferentes e, por último, a cada funcionário é atribuído um código cujo valor é único.

Outro pressuposto utilizado na modelação deste problema é que a loja precisa sempre de empregados para funcionar.

Também, foi considerado que, tal como explicado anteriormente, apenas o gerente pode efetuar pedidos a fornecedores. 


---
[< Previous](REI00.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >](REI02.md)
:--- | :---: | ---: 
