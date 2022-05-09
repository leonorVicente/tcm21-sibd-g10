# C3 : Esquema conceptual

## Modelo E/A

# As entidades tipo definidas são:

LOJA ( _ numeroContribuinte _ , nome , morada , codigoPostal , telefone )

VENDAS ( _ codigo _ , funcionario , valor )

CLIENTES ( _ numeroCliente _ , nomeFuncionario , telemovel , codigoPostal )

PRODUTO ( _ codigoProduto _ , stockLoja , stockArmazem , tamanho )

RESERVAS ( _ numeroReserva _ , numeroCliente , nomeFuncionario , valor , estadoPagamento )

PEDIDOS ( _ numeroPedido _ , codigoProduto , quantidade , valor )

FORNECEDORES ( _ codigoFornecedores _ , nome, morada , codigoPostal )

FUNCIONARIOS ( _ codigoFuncionario _ , tipo , nome , morada , NIF , telemovel , email )

# As associações definidas são:

saoEfetuadas ( LOJA , VENDAS )

tem ( LOJA , FORNECEDORES )

efetuaRegistos ( LOJA , CLIENTES )

possui ( LOJA , PRODUTO )

sãoEfetivadas ( CLIENTES , RESERVAS )

sãoFeitos ( FUNCIONARIOS , PEDIDOS )

trabalhaEm ( LOJA , FUNCIONARIOS )

_(Introduzir as entidade-tipo e associações do sistema, adicionalmente apresentar o diagrama do modelo Entidade-Associação.)_

Exemplo de inserção de uma imagem:   
![An alternative description](images/image02.png)   

Always add a description to help the user understand the figure 

NOTA: Cada entidade-tipo e cada associação devem ter um pequeno texto – um ou dois parágrafos – para descrever esse elemento do modelo e os seus atributos)

## Regras de negócio adicionais (Restrições)
_(Apresentar uma lista detalhada das regras e restrições não possíveis de representar no modelo E/A, que visam a manutenção da consistência e integridade da modelação do problema)_

---
[< Previous](REI02.md) | [^ Main](https://github.com/leonorVicente/tcm21-sibd-g10/) | [Next >]
:--- | :---: | ---: 
