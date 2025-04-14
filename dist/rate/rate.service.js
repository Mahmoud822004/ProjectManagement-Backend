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
exports.RateService = void 0;
const common_1 = require("@nestjs/common");
const rate_entity_1 = require("./entities/rate.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RateService = class RateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createRateDto) {
        try {
            const newRate = await this.userRepository.save(createRateDto);
            return newRate;
        }
        catch (err) {
            console.log(err);
        }
        ;
    }
    async findAll() {
        try {
            return await this.userRepository.find();
        }
        catch (err) {
            console.log(err);
        }
    }
    async findOne(id) {
        try {
            const newRate = await this.userRepository.findOne({ where: { id } });
            if (!newRate) {
                console.log("Rate not found");
                return newRate;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async update(id, updateRateDto) {
        try {
            const newRate = await this.userRepository.findOne({ where: { id } });
            if (!newRate) {
                console.log("Rate not found");
            }
            Object.assign(newRate, updateRateDto);
            return await this.userRepository.save(newRate);
        }
        catch (err) {
            console.log(err);
        }
    }
    async remove(id) {
        try {
            const newRate = await this.userRepository.delete(id);
            if (newRate.affected === 0) {
                console.log("Rate not found");
            }
            return console.log("Rate Delete successfully");
        }
        catch (err) {
            console.log(err);
        }
    }
};
exports.RateService = RateService;
exports.RateService = RateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rate_entity_1.Rate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RateService);
//# sourceMappingURL=rate.service.js.map