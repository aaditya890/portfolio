import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  public toast = inject(ScrollService)
} 
