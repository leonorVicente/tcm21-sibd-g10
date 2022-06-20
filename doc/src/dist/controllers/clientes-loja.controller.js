"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesLojaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClientesLojaController = class ClientesLojaController {
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }
    async getLoja(id) {
        return this.clientesRepository.loja(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/clientes/{id}/loja', {
        responses: {
            '200': {
                description: 'Loja belonging to Clientes',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Loja) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesLojaController.prototype, "getLoja", null);
ClientesLojaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ClientesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClientesRepository])
], ClientesLojaController);
exports.ClientesLojaController = ClientesLojaController;
//# sourceMappingURL=clientes-loja.controller.js.map