# C3 : Normalização

## Relações

VENDAS ( #numeroContribuinte -> LOJA , _ codigo _ )

FORNECEDORES ( #numeroContribuinte -> LOJA , _ codigoFornecedor _ , nome, morada , codigoPostal )

CLIENTES ( #numeroContribuinte -> LOJA, _ numeroCliente _ , nome , telemovel , codigoPostal )

PRODUTO ( #numeroContribuinte -> LOJA , _ codigoProduto _ , stockLoja , stockArmazem , tamanho , preco , descricao )

RESERVAS ( #numeroCliente -> CLIENTES , _ numeroReserva _ , apelido , valor , estadoPagamento )

PEDIDOS ( #codigoFuncionario -> FUNCIONARIOS , _ numeroPedido _ )

FUNCIONARIOS ( #numeroContribuinte -> LOJA , _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

saoElaboradas ( #numeroReserva -> RESERVA , #codigoProduto -> PRODUTO )

feitos ( #numeroPedido -> PEDIDO , #codigoProduto -> PRODUTO )



## Normalização do Esquema Relacional
_(Apresentar o estudo da normalização das relações obtidas na secção anterior. Desnormalizar se necessário.)_

---
[< Previous](rebd02.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >](rebd04.md)
:--- | :---: | ---: 
