import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import {PhotoComponent} from './photo.component';
import {PhotoToolbarComponent} from './photo-toolbar/photo-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [
    PhotoComponent,
    PhotoToolbarComponent
  ]
})
export class PhotoModule { }
