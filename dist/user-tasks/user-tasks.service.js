"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTasksService = void 0;
const common_1 = require("@nestjs/common");
let UserTasksService = class UserTasksService {
    create(createUserTaskDto) {
        return 'This action adds a new userTask';
    }
    findAll() {
        return `This action returns all userTasks`;
    }
    findOne(id) {
        return `This action returns a #${id} userTask`;
    }
    update(id, updateUserTaskDto) {
        return `This action updates a #${id} userTask`;
    }
    remove(id) {
        return `This action removes a #${id} userTask`;
    }
};
exports.UserTasksService = UserTasksService;
exports.UserTasksService = UserTasksService = __decorate([
    (0, common_1.Injectable)()
], UserTasksService);
//# sourceMappingURL=user-tasks.service.js.map