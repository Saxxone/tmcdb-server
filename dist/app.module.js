"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const comments_module_1 = require("./comments/comments.module");
const invitees_module_1 = require("./invitees/invitees.module");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const departments_module_1 = require("./departments/departments.module");
const families_module_1 = require("./families/families.module");
const tithe_module_1 = require("./tithe/tithe.module");
const homecell_module_1 = require("./homecell/homecell.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '3e63UUMGIuuJvKb9',
                database: 'tmcdb',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            comments_module_1.CommentsModule,
            invitees_module_1.InviteesModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            departments_module_1.DepartmentsModule,
            families_module_1.FamiliesModule,
            tithe_module_1.TitheModule,
            homecell_module_1.HomecellModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map