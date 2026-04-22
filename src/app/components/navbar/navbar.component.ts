import { Component, Input, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() profileImage: string = 'assets/nav-icon.webp';
  @Input() profileName: string = 'Software Developer';
  private scrollService = inject(ScrollService);
  @Input() profileRole: string = 'Designer';
  @Input() links: string[] = ['Projects', 'About', 'Faq', 'Skills'];

  open = false;

  navigate(link: string) {
    this.open = false;

    if (link === 'home') {
      this.scrollService.goToTop(); // 🔥 home = top
      return;
    }

    // 🔥 smooth scroll
    this.scrollService.scrollToElement(link, 90); // navbar offset
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Aaditya-Mishra-Resume.pdf';
    link.download = 'Aaditya-Mishra-Resume.pdf';
    link.target = '_blank'; // open in new tab (optional)
    link.click();
  }

  toggleMenu() {
    this.open = !this.open;
  }
}