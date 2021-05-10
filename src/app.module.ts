import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageModule } from './page/page.module';
import { PositionModule } from './position/position.module';
import { CategoryModule } from './category/category.module';
import { CtypeModule } from './ctype/ctype.module';
import { ContentModule } from './content/content.module';
import { ReviewModule } from './review/review.module';
import { ClickModule } from './click/click.module';
import { CommentModule } from './comment/comment.module';
import { ArticleModule } from './article/article.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_nestjs_project',
      // entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PageModule,
    PositionModule,
    CategoryModule,
    CtypeModule,
    // PostModule,
    ContentModule,
    ReviewModule,
    ClickModule,
    CommentModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
