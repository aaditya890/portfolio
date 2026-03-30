import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})

export class ServiceComponent {
  private dialogService = inject(DialogService);

  openContactDialog() {
    this.dialogService.openContactDialog();
  }
}
