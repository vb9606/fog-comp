import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './modules/article-details/article-details/article-details.component'
import { ArticleListingComponent } from './modules/article-listing/article-listing/article-listing.component'
import { AuthorsProfileComponent } from './modules/authors-profile/authors-profile/authors-profile.component'
import { EditArticleComponent } from './modules/edit-article/edit-article/edit-article.component'
import { PublishArticleComponent } from './modules/publish-article/publish-article/publish-article.component'


const routes: Routes = [
  { path: '', redirectTo: '/article-listing', pathMatch: 'full' },
  //{ path: '', component: ArticleDetailsComponent },
  { path: 'article-details', component: ArticleDetailsComponent },
  { path: 'article-listing', component: ArticleListingComponent },
  { path: 'authors-profile/:id', component: AuthorsProfileComponent },
  { path: 'edit-article', component: EditArticleComponent },
  { path: 'publish-article', component: PublishArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
