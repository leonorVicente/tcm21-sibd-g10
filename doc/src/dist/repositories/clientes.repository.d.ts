import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Clientes, ClientesRelations, Loja } from '../models';
import { LojaRepository } from './loja.repository';
export declare class ClientesRepository extends DefaultCrudRepository<Clientes, typeof Clientes.prototype.numeroCliente, ClientesRelations> {
    protected lojaRepositoryGetter: Getter<LojaRepository>;
    readonly loja: BelongsToAccessor<Loja, typeof Clientes.prototype.numeroCliente>;
    constructor(dataSource: DbDataSource, lojaRepositoryGetter: Getter<LojaRepository>);
}
