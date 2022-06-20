import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Clientes, ClientesRelations, Loja} from '../models';
import {LojaRepository} from './loja.repository';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype.numeroCliente,
  ClientesRelations
>{

  public readonly loja: BelongsToAccessor<Loja, typeof Clientes.prototype.numeroCliente>;

  constructor(
    @inject('datasources.leonorvicente') dataSource: DbDataSource, @repository.getter('LojaRepository') protected lojaRepositoryGetter: Getter<LojaRepository>,
  ) {
    super(Clientes, dataSource);
    this.loja = this.createBelongsToAccessorFor('loja', lojaRepositoryGetter,);
    this.registerInclusionResolver('loja', this.loja.inclusionResolver);
  }
}
