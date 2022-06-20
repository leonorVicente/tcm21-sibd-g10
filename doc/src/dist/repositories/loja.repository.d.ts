import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Loja, LojaRelations, Clientes } from '../models';
import { ClientesRepository } from './clientes.repository';
export declare class LojaRepository extends DefaultCrudRepository<Loja, typeof Loja.prototype.numeroContribuinte, LojaRelations> {
    protected clientesRepositoryGetter: Getter<ClientesRepository>;
    readonly clientes: HasManyRepositoryFactory<Clientes, typeof Loja.prototype.numeroContribuinte>;
    constructor(dataSource: DbDataSource, clientesRepositoryGetter: Getter<ClientesRepository>);
}
