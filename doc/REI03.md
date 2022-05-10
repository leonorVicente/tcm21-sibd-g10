# C3 : Esquema conceptual

## Modelo E/A

#### As entidades tipo definidas são:

LOJA ( _ numeroContribuinte _ , nome , morada , codigoPostal , telefone )

VENDAS ( _ codigo _ , valor )

CLIENTES ( _ numeroCliente _ , nome , telemovel , codigoPostal )

PRODUTO ( _ codigoProduto _ , stockLoja , stockArmazem , tamanho )

RESERVAS ( _ numeroReserva _ , apelido , valor , estadoPagamento )

PEDIDOS ( _ numeroPedido _ , produtos , quantidade , valor )

FORNECEDORES ( _ codigoFornecedores _ , nome, morada , codigoPostal )

FUNCIONARIOS ( _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )


#### As associações definidas são:

saoEfetuadas ( LOJA , VENDAS ) , 1:N , P/T

tem ( LOJA , FORNECEDORES ) , 1:N , T/P

efetuaRegistos ( LOJA , CLIENTES ) , 1:N , T/T

possui ( LOJA , PRODUTO ) , 1:N , T/T

sãoEfetivadas ( CLIENTES , RESERVAS ) , 1:N , P/T

sãoFeitos ( FUNCIONARIOS , PEDIDOS ) , 1:N , P/T

trabalhaEm ( LOJA , FUNCIONARIOS ) , 1:N , T/T

  
(Diagrama1.jpeg)   


## Regras de negócio adicionais (Restrições)

A única regra de negócio adicional, tal como referido anteriormente, é que apenas o gerente consegue fazer pedidos a fornecedores.

---
[< Previous](REI02.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >]
:--- | :---: | ---: 
