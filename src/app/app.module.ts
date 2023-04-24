import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListingComponent } from './article-listing/article-listing.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AuthorsProfileComponent } from './authors-profile/authors-profile.component';
import { PublishArticleComponent } from './publish-article/publish-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListingComponent,
    ArticleDetailsComponent,
    AuthorsProfileComponent,
    PublishArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
