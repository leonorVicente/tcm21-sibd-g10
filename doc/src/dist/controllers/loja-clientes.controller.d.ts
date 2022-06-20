import { Count, Filter, Where } from '@loopback/repository';
import { Loja, Clientes } from '../models';
import { LojaRepository } from '../repositories';
export declare class LojaClientesController {
    protected lojaRepository: LojaRepository;
    constructor(lojaRepository: LojaRepository);
    find(id: number, filter?: Filter<Clientes>): Promise<Clientes[]>;
    create(id: typeof Loja.prototype.numeroContribuinte, clientes: Omit<Clientes, 'numeroCliente'>): Promise<Clientes>;
    patch(id: number, clientes: Partial<Clientes>, where?: Where<Clientes>): Promise<Count>;
    delete(id: number, where?: Where<Clientes>): Promise<Count>;
}
