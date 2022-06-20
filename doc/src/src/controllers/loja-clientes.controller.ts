import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Loja,
  Clientes,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaClientesController {
  constructor(
    @repository(LojaRepository) protected lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/clientes', {
    responses: {
      '200': {
        description: 'Array of Loja has many Clientes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Clientes)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Clientes>,
  ): Promise<Clientes[]> {
    return this.lojaRepository.clientes(id).find(filter);
  }

  @post('/lojas/{id}/clientes', {
    responses: {
      '200': {
        description: 'Loja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Clientes)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Loja.prototype.numeroContribuinte,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clientes, {
            title: 'NewClientesInLoja',
            exclude: ['numeroCliente'],
            optional: ['numeroCliente']
          }),
        },
      },
    }) clientes: Omit<Clientes, 'numeroCliente'>,
  ): Promise<Clientes> {
    return this.lojaRepository.clientes(id).create(clientes);
  }

  @patch('/lojas/{id}/clientes', {
    responses: {
      '200': {
        description: 'Loja.Clientes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clientes, {partial: true}),
        },
      },
    })
    clientes: Partial<Clientes>,
    @param.query.object('where', getWhereSchemaFor(Clientes)) where?: Where<Clientes>,
  ): Promise<Count> {
    return this.lojaRepository.clientes(id).patch(clientes, where);
  }

  @del('/lojas/{id}/clientes', {
    responses: {
      '200': {
        description: 'Loja.Clientes DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Clientes)) where?: Where<Clientes>,
  ): Promise<Count> {
    return this.lojaRepository.clientes(id).delete(where);
  }
}
