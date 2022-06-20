import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Loja } from '../models';
import { LojaRepository } from '../repositories';
export declare class LojaControllerController {
    lojaRepository: LojaRepository;
    constructor(lojaRepository: LojaRepository);
    create(loja: Omit<Loja, 'numeroContribuinte'>): Promise<Loja>;
    count(where?: Where<Loja>): Promise<Count>;
    find(filter?: Filter<Loja>): Promise<Loja[]>;
    updateAll(loja: Loja, where?: Where<Loja>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Loja>): Promise<Loja>;
    updateById(id: number, loja: Loja): Promise<void>;
    replaceById(id: number, loja: Loja): Promise<void>;
    deleteById(id: number): Promise<void>;
}
