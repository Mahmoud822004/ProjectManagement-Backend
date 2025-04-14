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
exports.ProjectDepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_department_entity_1 = require("./entities/project_department.entity");
const typeorm_2 = require("typeorm");
let ProjectDepartmentsService = class ProjectDepartmentsService {
    constructor(projectDepartmentRepository) {
        this.projectDepartmentRepository = projectDepartmentRepository;
    }
    async create(createProjectDepartmentDto) {
        try {
            const projectDepartment = this.projectDepartmentRepository.create(createProjectDepartmentDto);
            return await this.projectDepartmentRepository.save(projectDepartment);
        }
        catch (error) {
            throw new error(error);
        }
    }
    async findAll() {
        try {
            const projectDepartments = await this.projectDepartmentRepository.find();
            return projectDepartments;
        }
        catch (error) {
            throw new error(error);
        }
    }
    async findOne(id) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            return projectDepartment;
        }
        catch (error) {
            throw new error(error);
        }
    }
    async update(id, updateProjectDepartmentDto) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            return await this.projectDepartmentRepository.update(id, updateProjectDepartmentDto);
        }
        catch (error) {
            throw new error(error);
        }
    }
    async remove(id) {
        try {
            const projectDepartment = await this.projectDepartmentRepository.findOne({
                where: { id },
            });
            if (!projectDepartment) {
                throw new Error('projectDepartment not found ');
            }
            const deletedProjectDepartment = await this.projectDepartmentRepository.softDelete(id);
            return deletedProjectDepartment;
        }
        catch (error) {
            throw new error(error);
        }
    }
};
exports.ProjectDepartmentsService = ProjectDepartmentsService;
exports.ProjectDepartmentsService = ProjectDepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_department_entity_1.ProjectDepartment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectDepartmentsService);
//# sourceMappingURL=project_departments.service.js.map