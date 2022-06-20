import { Entity } from '@loopback/repository';
import { Clientes } from './clientes.model';
export declare class Loja extends Entity {
    numeroContribuinte: number;
    nome: string;
    morada: string;
    codigoPostal: string;
    telefone?: number;
    clientes: Clientes[];
    constructor(data?: Partial<Loja>);
}
export interface LojaRelations {
}
export declare type LojaWithRelations = Loja & LojaRelations;
