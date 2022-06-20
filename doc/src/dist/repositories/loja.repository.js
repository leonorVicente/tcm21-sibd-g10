"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let LojaRepository = class LojaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clientesRepositoryGetter) {
        super(models_1.Loja, dataSource);
        this.clientesRepositoryGetter = clientesRepositoryGetter;
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clientesRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    }
};
LojaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.leonorvicente')),
    tslib_1.__param(1, repository_1.repository.getter('ClientesRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], LojaRepository);
exports.LojaRepository = LojaRepository;
//# sourceMappingURL=loja.repository.js.map