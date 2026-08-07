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
      title: 'Dmsprism',
      desc: 'Dmsprism is a UK-based digital service platform offering a wide range of marketing, branding, and web solutions for businesses. Built with a modern tech stack, it delivers scalable performance and seamless user experience.',
      image: 'assets/web-showcase-images/dmsprism.webp',
      url: 'https://dmsprism.com/',
      tags: ['Angular', 'Angular Material', 'Tailwind', 'Firebase', 'TawkChat'],
    },
    {
      title: 'The Girls Room London',
      desc: 'The Girls Room London is a clinic-based informational landing page designed with a clean and modern UI. Built using Angular, Angular Material, Tailwind, and SCSS, it features responsive layouts and Web3Forms integration for seamless contact handling.',
      image: 'assets/web-showcase-images/thegirlsroom.webp',
      url: 'https://thegirlsroomlondon.com/',
      tags: ['Angular', 'Angular Material', 'Tailwind', 'SCSS', 'Web3Forms'],
    },
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
