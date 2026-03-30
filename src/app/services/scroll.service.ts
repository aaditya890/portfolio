import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
 show = signal(false);
  message = signal('');
   scrollToElement(elementId: string, offset: number = 0) {
    const element = document.getElementById(elementId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

   trigger(msg: string) {
    this.message.set(msg);
    this.show.set(true);

    setTimeout(() => {
      this.show.set(false);
    }, 3000);
  }
}
