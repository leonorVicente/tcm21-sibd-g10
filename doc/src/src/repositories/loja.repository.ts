import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Loja, LojaRelations, Clientes} from '../models';
import {ClientesRepository} from './clientes.repository';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.numeroContribuinte,
  LojaRelations
> {

  public readonly clientes: HasManyRepositoryFactory<Clientes, typeof Loja.prototype.numeroContribuinte>;

  constructor(
    @inject('datasources.leonorvicente') dataSource: DbDataSource, @repository.getter('ClientesRepository') protected clientesRepositoryGetter: Getter<ClientesRepository>,
  ) {
    super(Loja, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clientesRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
  }
}
