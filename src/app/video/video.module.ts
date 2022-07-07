import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageComponent } from '../pages/manage/manage.component';
import { UploadComponent } from '../pages/upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageComponent, UploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    VideoRoutingModule,
    ReactiveFormsModule,
  ],
})
export class VideoModule {}
