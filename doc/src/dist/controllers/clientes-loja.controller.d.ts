import { Clientes, Loja } from '../models';
import { ClientesRepository } from '../repositories';
export declare class ClientesLojaController {
    clientesRepository: ClientesRepository;
    constructor(clientesRepository: ClientesRepository);
    getLoja(id: typeof Clientes.prototype.numeroCliente): Promise<Loja>;
}
