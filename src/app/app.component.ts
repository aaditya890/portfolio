import { Component, inject, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import { HomeComponent } from './components/home/home.component';
import { DialogService } from './services/dialog.service';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { ToastComponent } from "./toast/toast.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, ContactDialogComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dialogService = inject(DialogService);
  lenis: any;

  ngOnInit(): void {

    // 🔥 LENIS
    this.lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 🔥 AOS INIT (DELAYED)
    setTimeout(() => {
      AOS.init({
        duration: 900,
        once: true,
        offset: 200, // 👈 IMPORTANT (late trigger)
        easing: 'ease-out-cubic'
      });
    }, 300);

    // 🔥 SYNC (IMPORTANT)
    this.lenis.on('scroll', () => {
      AOS.refreshHard(); // 👈 refreshHard use karo
    });
  }

  closeContactDialog() {
    this.dialogService.closeContactDialog();
  }
}