import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { PhotoToolbarComponent } from './photo-toolbar/photo-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoComponent, PhotoToolbarComponent]
})
export class PhotoModule { }
