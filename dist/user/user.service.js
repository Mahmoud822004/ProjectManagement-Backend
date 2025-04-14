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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const auth_service_1 = require("../auth/auth.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        try {
            const hashPass = await bcrypt.hash(createUserDto.password, 10);
            const newUser = await this.userRepository.save({ ...createUserDto, password: hashPass });
            const access_token = await this.jwtService.generateAccessToken(newUser.id);
            return newUser;
        }
        catch (error) {
            return error;
        }
    }
    async updateAccessToken(userId, accessToken) {
        try {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                console.log('User not found');
                return;
            }
            user.accessToken = accessToken;
            await this.userRepository.save(user);
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
    async logIn(loginDto) {
        try {
            const user = await this.userRepository.findOne({ where: { email: loginDto.email } });
            if (!user) {
                return "email not found";
            }
            const correctPass = await bcrypt.compare(loginDto.password, user.password);
            if (!correctPass) {
                return "wrong password";
            }
            const accessToken = await this.jwtService.generateAccessToken({ id: user.id });
            return { accessToken, user };
        }
        catch (err) {
            return err;
        }
    }
    findAll() {
        return `This action returns all user`;
    }
    findOne(id) {
        return this.userRepository.findOne({ where: { id: id } });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.service.js.map