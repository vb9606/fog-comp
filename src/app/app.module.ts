import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleDetailsComponent } from './modules/article-details/article-details/article-details.component'
import { ArticleListingComponent } from './modules/article-listing/article-listing/article-listing.component'
import { AuthorsProfileComponent } from './modules/authors-profile/authors-profile/authors-profile.component'
import { EditArticleComponent } from './modules/edit-article/edit-article/edit-article.component'
import { PublishArticleComponent } from './modules/publish-article/publish-article/publish-article.component'
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
