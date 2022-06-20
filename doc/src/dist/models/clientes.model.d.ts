import { Entity } from '@loopback/repository';
export declare class Clientes extends Entity {
    numeroCliente?: number;
    nome: string;
    telemovel?: number;
    codigoPostal: string;
    numeroContribuinte: number;
    [prop: string]: any;
    constructor(data?: Partial<Clientes>);
}
export interface ClientesRelations {
}
export declare type ClientesWithRelations = Clientes & ClientesRelations;
