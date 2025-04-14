"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const department_entity_1 = require("./entities/department.entity");
const typeorm_2 = require("typeorm");
let DepartmentsService = class DepartmentsService {
    constructor(departmentsRepository) {
        this.departmentsRepository = departmentsRepository;
    }
    async create(createDepartmentDto, user) {
        if (user.role !== 'manager')
            throw new common_1.UnauthorizedException('Only manager can create departments.');
        try {
            const newDepartment = await this.departmentsRepository.save({
                ...createDepartmentDto,
            });
            return newDepartment;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll() {
        try {
            return await this.departmentsRepository.find();
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOne(id) {
        try {
            const department = await this.departmentsRepository.findOne({
                where: { id },
            });
            if (!department) {
                console.log('This departmen id was not found.');
            }
            return department;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateDepartmentDto, user) {
        if (user.role !== 'manager')
            throw new common_1.UnauthorizedException('Only manager can update departments.');
        try {
            const department = await this.departmentsRepository.findOne({
                where: { id },
            });
            if (!department) {
                console.log('This departmen id was not found.');
            }
            Object.assign(department, updateDepartmentDto);
            return await this.departmentsRepository.save(department);
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id, user) {
        try {
            if (user.role !== 'manager')
                throw new common_1.UnauthorizedException('Only manager can delete departments.');
            const department = await this.departmentsRepository.softDelete(id);
            if (department.affected === 0) {
                console.log('This departmen id was not found.');
            }
            return console.log('Department deleted successfully. ');
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map