import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsProfileRoutingModule } from './authors-profile-routing.module';
import { AuthorsProfileComponent } from './authors-profile/authors-profile.component';


@NgModule({
  declarations: [
    AuthorsProfileComponent
  ],
  imports: [
    CommonModule,
    AuthorsProfileRoutingModule
  ]
})
export class AuthorsProfileModule { }
