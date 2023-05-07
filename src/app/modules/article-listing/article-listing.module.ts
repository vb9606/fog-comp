import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListingRoutingModule } from './article-listing-routing.module';
import { ArticleListingComponent } from './article-listing/article-listing.component';


@NgModule({
  declarations: [
    ArticleListingComponent
  ],
  imports: [
    CommonModule,
    ArticleListingRoutingModule
  ]
})
export class ArticleListingModule { }
