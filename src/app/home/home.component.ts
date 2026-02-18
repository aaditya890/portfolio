import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  profileImages: string[] = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&q=80&w=1000",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&q=80&w=1000",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&q=80&w=1000",
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.profileImages.length;
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
