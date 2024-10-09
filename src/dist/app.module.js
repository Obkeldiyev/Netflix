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
const films_module_1 = require("./films/films.module");
const typeorm_1 = require("@nestjs/typeorm");
const serials_module_1 = require("./serials/serials.module");
const categories_module_1 = require("./categories/categories.module");
const age_permission_module_1 = require("./age_permission/age_permission.module");
const likes_module_1 = require("./likes/likes.module");
const dislike_module_1 = require("./dislike/dislike.module");
const views_module_1 = require("./views/views.module");
const dotenv = require("dotenv");
const film_entity_1 = require("./films/entities/film.entity");
const serial_entity_1 = require("./serials/entities/serial.entity");
const like_entity_1 = require("./likes/entities/like.entity");
const dislike_entity_1 = require("./dislike/entities/dislike.entity");
const view_entity_1 = require("./views/entities/view.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const age_permission_entity_1 = require("./age_permission/entities/age_permission.entity");
const admin_entity_1 = require("./admins/entities/admin.entity");
const comment_entity_1 = require("./comments/entities/comment.entity");
const continent_entity_1 = require("./continent/entities/continent.entity");
const country_entity_1 = require("./countries/entities/country.entity");
const user_entity_1 = require("./users/entities/user.entity");
const admins_module_1 = require("./admins/admins.module");
const comments_module_1 = require("./comments/comments.module");
const continent_module_1 = require("./continent/continent.module");
const countries_module_1 = require("./countries/countries.module");
const users_module_1 = require("./users/users.module");
const actor_module_1 = require("./actor/actor.module");
const actor_award_entity_1 = require("./actor-award/entities/actor-award.entity");
const actor_award_module_1 = require("./actor-award/actor-award.module");
const director_module_1 = require("./director/director.module");
const director_award_entity_1 = require("./director-award/entities/director-award.entity");
const movie_award_module_1 = require("./movie-award/movie-award.module");
const actor_entity_1 = require("./actor/entities/actor.entity");
const actor_director_serial_film_entity_1 = require("./actor_director_serial_film/entities/actor_director_serial_film.entity");
const actor_director_serial_film_module_1 = require("./actor_director_serial_film/actor_director_serial_film.module");
const award_entity_1 = require("./award/entities/award.entity");
const award_module_1 = require("./award/award.module");
const director_entity_1 = require("./director/entities/director.entity");
const movie_award_entity_1 = require("./movie-award/entities/movie-award.entity");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [
                    film_entity_1.Film,
                    serial_entity_1.Serial,
                    like_entity_1.Like,
                    dislike_entity_1.Dislike,
                    view_entity_1.View,
                    category_entity_1.Category,
                    age_permission_entity_1.AgePermission,
                    admin_entity_1.Admin,
                    comment_entity_1.Comment,
                    continent_entity_1.Continent,
                    country_entity_1.Country,
                    user_entity_1.User,
                    actor_entity_1.Actor,
                    actor_director_serial_film_entity_1.ActorDirectorSerialFilm,
                    actor_award_entity_1.ActorAward,
                    award_entity_1.Award,
                    director_entity_1.Director,
                    director_award_entity_1.DirectorAward,
                    movie_award_entity_1.MovieAward,
                ],
                synchronize: true,
                logging: true,
            }),
            films_module_1.FilmsModule,
            serials_module_1.SerialsModule,
            categories_module_1.CategoriesModule,
            age_permission_module_1.AgePermissionModule,
            likes_module_1.LikesModule,
            dislike_module_1.DislikeModule,
            views_module_1.ViewsModule,
            admins_module_1.AdminsModule,
            comments_module_1.CommentsModule,
            continent_module_1.ContinentModule,
            countries_module_1.CountriesModule,
            users_module_1.UsersModule,
            actor_module_1.ActorModule,
            actor_award_entity_1.ActorAward,
            actor_award_module_1.ActorAwardModule,
            director_module_1.DirectorModule,
            director_award_entity_1.DirectorAward,
            movie_award_module_1.MovieAwardModule,
            actor_director_serial_film_module_1.ActorDirectorSerialFilmModule,
            award_module_1.AwardModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map