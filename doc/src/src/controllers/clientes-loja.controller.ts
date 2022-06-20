import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Clientes,
  Loja,
} from '../models';
import {ClientesRepository} from '../repositories';

export class ClientesLojaController {
  constructor(
    @repository(ClientesRepository)
    public clientesRepository: ClientesRepository,
  ) { }

  @get('/clientes/{id}/loja', {
    responses: {
      '200': {
        description: 'Loja belonging to Clientes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Loja)},
          },
        },
      },
    },
  })
  async getLoja(
    @param.path.number('id') id: typeof Clientes.prototype.numeroCliente,
  ): Promise<Loja> {
    return this.clientesRepository.loja(id);
  }
}
