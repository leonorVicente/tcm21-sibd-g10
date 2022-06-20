"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const loja_model_1 = require("./loja.model");
let Clientes = class Clientes extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "numeroCliente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Clientes.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "telemovel", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Clientes.prototype, "codigoPostal", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => loja_model_1.Loja, { name: 'loja' }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "numeroContribuinte", void 0);
Clientes = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Clientes);
exports.Clientes = Clientes;
//# sourceMappingURL=clientes.model.js.map