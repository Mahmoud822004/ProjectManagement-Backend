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
exports.ProjectUserService = void 0;
const common_1 = require("@nestjs/common");
const project_user_entity_1 = require("./entities/project_user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProjectUserService = class ProjectUserService {
    constructor(projectUserRepository) {
        this.projectUserRepository = projectUserRepository;
    }
    async create(createProjectUserDto) {
        try {
            const newProjectUser = await this.projectUserRepository.save(createProjectUserDto);
            return newProjectUser;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll(project_id) {
        try {
            return await this.projectUserRepository.find({
                where: { project_id, deletedAt: null },
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOne(id) {
        try {
            const projectUser = await this.projectUserRepository.findOne({
                where: { id },
            });
            if (!projectUser) {
                console.log('This project user id was not found.');
            }
            return projectUser;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateProjectUserDto) {
        try {
            const projectUser = await this.projectUserRepository.findOne({
                where: { id },
            });
            if (!projectUser) {
                console.log('This project user id was not found.');
            }
            Object.assign(projectUser, updateProjectUserDto);
            return await this.projectUserRepository.save(projectUser);
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        try {
            const projectUser = await this.projectUserRepository.softDelete(id);
            if (projectUser.affected === 0) {
                console.log('This project user id was not found.');
            }
            return console.log('Project user deleted successfully.');
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ProjectUserService = ProjectUserService;
exports.ProjectUserService = ProjectUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_user_entity_1.ProjectUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectUserService);
//# sourceMappingURL=project_user.service.js.map