import {Entity, model, property, hasMany} from '@loopback/repository';
import {Clientes} from './clientes.model';

@model()
export class Loja extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  numeroContribuinte: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoPostal: string;


  @property({
    type: 'number',
  })
  telefone?: number;

  @hasMany(() => Clientes, {keyTo: 'numeroCliente'})
  clientes: Clientes[];

  constructor(data?: Partial<Loja>) {
    super(data);
  }
}

export interface LojaRelations {
  // describe navigational properties here
}

export type LojaWithRelations = Loja & LojaRelations;
