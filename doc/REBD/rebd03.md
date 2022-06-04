# C3 : Normalização

## Relações

VENDAS ( #_ numeroContribuinte _ -> LOJA , _ codigo _ )

FORNECEDORES ( #_ numeroContribuinte _ -> LOJA , _ codigoFornecedor _ , nome, morada , codigoPostal )

CLIENTES ( #_ numeroContribuinte _ -> LOJA, _ numeroCliente _ , nome , telemovel , codigoPostal )

PRODUTO ( #_ numeroContribuinte _ -> LOJA , _ codigoProduto _ , stockLoja , stockArmazem , tamanho , preco , descricao )

RESERVAS ( #_ numeroCliente _ -> CLIENTES , _ numeroReserva _ , apelido , valor , estadoPagamento )

PEDIDOS ( #_ codigoFuncionario _ -> FUNCIONARIOS , _ numeroPedido _ )

FUNCIONARIOS ( #_ numeroContribuinte _ -> LOJA , _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

saoElaboradas ( #_ numeroReserva _ -> RESERVA , #_ codigoProduto _ -> PRODUTO )

feitos ( #_ numeroPedido _ -> PEDIDO , #_ codigoProduto _ -> PRODUTO )



## Normalização do Esquema Relacional

1NF 

LojaRoupa ( _ numeroContribuinte _, nome , morada , codigoPostal , telefone , _numeroCliente _ , nome , telemovel , codigoPostal , _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

2NF

LojaRoupa ( _ numeroContribuinte _ , _numeroCliente _ , nome , telemovel , codigoPostal , _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

EnderecoLoja (#_ numeroContribuinte _ -> LojaRoupa , _ morada _ , codigoPostal , telefone)

3NF

Loja Roupa ( _ numeroContribuinte _ , _numeroCliente _ , _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

FichaCliente (#_ numeroCliente _ -> LojaRoupa , nome , telemovel , codigoPostal )

4NF

Loja Roupa ( _ numeroContribuinte _ , _numeroCliente _ , _ codigoFuncionario _ )

DadosFuncionario (#_ codigoFuncionario _ -> LojaRoupa , tipo ,  nome , morada , NIF , telemovel , email )

FichaCliente (#_ numeroCliente _ -> LojaRoupa , nome , telemovel , codigoPostal )

EnderecoLoja (#_ numeroContribuinte _ -> LojaRoupa , _ morada _ , codigoPostal , telefone)

---
[< Previous](rebd02.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >](rebd04.md)
:--- | :---: | ---: 
