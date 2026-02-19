import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailText: string = 'aadityamishra.dev@gmail.com';
    socialIcons: string[] = ['🌐', 'Be', 'in'];
}
