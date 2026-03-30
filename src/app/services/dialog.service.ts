import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isOpen = signal(false);

  openContactDialog() {
    this.isOpen.set(true);
  }

  closeContactDialog() {
    this.isOpen.set(false);
  }
}
