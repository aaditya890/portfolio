import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  @Input() profileImage: string =
    'assets/vector-profile-icon.svg';

  @Input() profileName: string = 'Software Developer';
  @Input() profileRole: string = 'Designer';
  @Input() links: string[] = ['Home', 'Projects', 'About', 'Contact'];

  open = false;

  navigate(link: string) {
    console.log(link);
    this.open = false;
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
