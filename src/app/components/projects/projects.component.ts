import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import Aos from 'aos';

interface Project {
  id: number;
  title: string;
  des: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showAll = signal(false);

  projects = signal([
    {
      title: 'KiteCab',
      desc: 'KiteCab is a modern cab booking platform that enables users to book rides quickly and efficiently. It features a responsive interface, real-time booking flow, vehicle management, and a seamless user experience built with modern web technologies.',
      image: 'assets/web-showcase-images/kitecab.webp',
      url: 'https://kitecab.com/',
      tags: [
        'Angular',
        'Angular Material',
        'Tailwind',
        'TypeScript',
        'Node.js',
        'Supabase',
      ],
    },
  ]);

  visibleProjects = computed(() => {
    return this.showAll() ? this.projects() : this.projects().slice(0, 4);
  });

  ngAfterViewInit() {
    Aos.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
    });
  }

  toggleProjects() {
    this.showAll.set(true);

    setTimeout(() => {
      Aos.refresh(); // 🔥 important
    }, 200);
  }
}
