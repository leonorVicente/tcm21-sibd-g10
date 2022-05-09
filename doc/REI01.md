# C1 : Introdução


## Descrição do trabalho

Com este relatório o grupo visa aqui apresentar toda a informação relativamente ao sistema a desenvolver, bem como todas as especificações por este requeridas, num formato concreto e por extenso, de forma a verificar que todos os elementos aqui presentes estão completos e em conformidade com o pedido pelo docente da disciplina no enunciado do trabalho.

O trabalho consiste na especificação e desenvolvimento de um sistema que permita informatizar as vendas de uma loja de vestuário. Este sistema é extremamente necessário para esta loja, dado o crescimento exponencial das suas vendas - que cada vez têm sido mais difíceis de registar. 

Pretende-se que o sistema desenvolvido permita registar as vendas. Assim sendo, cada venda possui: um código da venda, o nome do funcionário responsável, o nome do cliente - assim como, o respetivo número de cliente (caso este possua uma ficha de cliente) - e o valor. Existem clientes que optam por fazer uma ficha de cliente, dado que estas lhes permitem obter algumas vantagens, como por exemplo, um voucher de aniversário e pontos. Assim sendo, para as fazer é necessário que o cliente forneça: o número de cliente, o nome, o telemóvel e o código-postal. Ora, é importante referir que a sistematização dos códigos postais dos clientes é algo bastante importante para os donos da loja, pois, num futuro próximo, tencionam abrir outra loja e, com estes dados, saberão qual será a melhor localização para a mesma. 

Relativamente aos funcionários, estes são identificados pelo(/a): código de funcionário, tipo de funcionário (ou seja, se é um gerente ou um lojista), nome, morada, número de identificação fiscal, número de telemóvel e e-mail. Note-se que, saber qual é o "tipo" do funcionário é fundamental para o funcionamento do sistema, pois apenas os funcionários que são gerentes é que conseguem fazer pedidos a fornecedores.

A loja tem vários fornecedores que garantem o fornecimento dos produtos que esta vende. Cada um destes tem: um código, um nome, uma morada, um código postal e um telefone. 

Consequentemente, será necessário informatizar cada produto, isto é: código, stock em loja, stock em armazém e o tamanho. 

Por último, será necessário informatizar as reservas feitas por clientes: número da reserva, número de cliente, funcionário responsável, valor e estado do pagamento; assim como, os pedidos a forncedores: número do pedido, código do produto, quantidade do produto e o valor. 

## Modelação do problema

_(Apresentar os pressupostos utilizados na modelação do problema, estes pressupostos poderão não estar na descrição do trabalho)_


---
[< Previous](REI00.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](REI02.md)
:--- | :---: | ---: 
