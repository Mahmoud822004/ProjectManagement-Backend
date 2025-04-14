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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
const console_1 = require("console");
const project_user_entity_1 = require("../project_user/entities/project_user.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository, projectUserRepository) {
        this.projectRepository = projectRepository;
        this.projectUserRepository = projectUserRepository;
    }
    async create(createProjectDto) {
        try {
            const newProject = await this.projectRepository.save({ ...createProjectDto, });
            return newProject;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAll() {
        try {
            const projects = await this.projectRepository.find();
            return projects;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOne(id, request) {
        try {
            const project = await this.projectRepository.findOne({ where: { id } });
            const isMember = await this.projectUserRepository.findOne({ where: { project_id: { id }, user_id: { id: request.user.id } }, });
            if (!project) {
                throw new console_1.error(`Project with ID ${id} not found`);
            }
            else {
                if (!isMember) {
                    throw new console_1.error('resource is not authorized');
                }
                else {
                    return project;
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateProjectDto) {
        try {
            const projectToUpdate = await this.projectRepository.findOne({ where: { id } });
            if (!projectToUpdate) {
                throw new console_1.error(`Project with ID ${id} not found`);
            }
            else {
                const updatedProject = await this.projectRepository.update(id, updateProjectDto);
                return updatedProject;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        try {
            const projectToDelete = await this.projectRepository.findOne({ where: { id } });
            if (!projectToDelete) {
                throw new console_1.error(`Project with ID ${id} not found`);
            }
            else {
                await this.projectRepository.delete(id);
            }
            return `This action removes a #${id} project`;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(project_user_entity_1.ProjectUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map