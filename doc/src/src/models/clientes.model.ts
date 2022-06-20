import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Loja} from './loja.model';

@model({settings: {strict: false}})
export class Clientes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  numeroCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
  })
  telemovel?: number;

  @property({
    type: 'string',
    required: true,
  })
  codigoPostal: string;

  @belongsTo(() => Loja, {name: 'loja'})
  numeroContribuinte: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
