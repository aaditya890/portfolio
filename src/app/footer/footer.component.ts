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

    downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/Aaditya-Mishra-Resume.pdf';
  link.download = 'Aaditya-Mishra-Resume.pdf';
  link.target = '_blank'; // open in new tab (optional)
  link.click();
}
}
