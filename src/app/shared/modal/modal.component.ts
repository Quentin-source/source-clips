import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  // providers: [ModalService],
})
export class ModalComponent {
  @Input() modalID = '';

  constructor(public modal: ModalService) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
