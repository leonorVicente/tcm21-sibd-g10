"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaClientesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LojaClientesController = class LojaClientesController {
    constructor(lojaRepository) {
        this.lojaRepository = lojaRepository;
    }
    async find(id, filter) {
        return this.lojaRepository.clientes(id).find(filter);
    }
    async create(id, clientes) {
        return this.lojaRepository.clientes(id).create(clientes);
    }
    async patch(id, clientes, where) {
        return this.lojaRepository.clientes(id).patch(clientes, where);
    }
    async delete(id, where) {
        return this.lojaRepository.clientes(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/lojas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Array of Loja has many Clientes',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Clientes) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaClientesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/lojas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Loja model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Clientes) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Clientes, {
                    title: 'NewClientesInLoja',
                    exclude: ['numeroCliente'],
                    optional: ['numeroCliente']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaClientesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/lojas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Loja.Clientes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Clientes, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Clientes))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaClientesController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/lojas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Loja.Clientes DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Clientes))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LojaClientesController.prototype, "delete", null);
LojaClientesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.LojaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LojaRepository])
], LojaClientesController);
exports.LojaClientesController = LojaClientesController;
//# sourceMappingURL=loja-clientes.controller.js.map