import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from './skills/skills.component';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import { DumComponent } from "./dum/dum.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    DumComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
}