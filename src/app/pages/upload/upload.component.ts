import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  isDragover = false;
  file: File | null = null;
  nextStep = false;

  title = new FormControl('', [Validators.required, Validators.min(3)]);

  uploadForm = new FormGroup({
    title: this.title,
  });

  storeFile(event: Event) {
    this.isDragover = false;
    this.file = (event as DragEvent).dataTransfer?.files.item(0) ?? null;

    if (!this.file || this.file.type !== 'image/mp4') return;

    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
  }

  uploadFile() {
    console.log('File uploaded');
  }
}
