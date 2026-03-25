import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  // 🔥 Greeting
greetings: string[] = [
  "नमस्ते ",        // Hindi
  "Namaste",      // English (Indian style      // Italian
  "こんにちは",   // Japanese (Konnichiwa)
  "你好",         // Chinese (Ni Hao)
  "안녕하세요",     // Korean
];  greetingIndex = 0;
  greetingText = this.greetings[0];
  animate = true;
  greetingInterval: any;

  // 🔥 Images
  profileImages: string[] = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&q=80&w=1000",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&q=80&w=1000",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&q=80&w=1000",
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {

    // 🔁 Image slider
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.profileImages.length;
    }, 3000);

    // 🔥 Greeting animation loop
    this.greetingInterval = setInterval(() => {

      this.animate = false; // fade out

      setTimeout(() => {
        this.greetingIndex =
          (this.greetingIndex + 1) % this.greetings.length;

        this.greetingText = this.greetings[this.greetingIndex];

        this.animate = true; // fade in
      }, 200);

    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearInterval(this.greetingInterval);
  }
}