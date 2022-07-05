import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id: id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(element => element.id !== id);
  }

  isModalOpen = (id: string): boolean =>
    !!this.modals.find(modal => modal.id === id)?.visible;

  toggleModal(id: string) {
    const isModalVisible = this.modals.find(modal => modal.id === id);
    if (isModalVisible) {
      isModalVisible.visible = !isModalVisible.visible;
    }
  }
}
