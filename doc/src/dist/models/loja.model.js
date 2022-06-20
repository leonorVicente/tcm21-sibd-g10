"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const clientes_model_1 = require("./clientes.model");
let Loja = class Loja extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Loja.prototype, "numeroContribuinte", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "morada", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Loja.prototype, "codigoPostal", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Loja.prototype, "telefone", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => clientes_model_1.Clientes, { keyTo: 'numeroCliente' }),
    tslib_1.__metadata("design:type", Array)
], Loja.prototype, "clientes", void 0);
Loja = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Loja);
exports.Loja = Loja;
//# sourceMappingURL=loja.model.js.map