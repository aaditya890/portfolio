import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, HostListener, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import Aos from 'aos';

interface Project {
  id: number;
  title: string;
  des: string,
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
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  showAll = signal(false);

  projects = signal([
    {
      title: 'Dmsprism',
      desc: 'Dmsprism is a UK-based digital service platform offering a wide range of marketing, branding, and web solutions for businesses. Built with a modern tech stack, it delivers scalable performance and seamless user experience.',
      image: 'assets/web-showcase-images/dmsprism.webp',
      url: 'https://dmsprism.com/',
      tags: ['Angular', 'Angular Material', 'Tailwind', 'Firebase', 'TawkChat']
    },
    {
      title: 'The Turnkey Company',
      desc: 'The Turnkey Company is a modern interior solutions platform designed with a premium UI and smooth user experience. Built using Angular, Angular Material, Tailwind, and Firebase, it delivers high performance with a visually rich and professional design.',
      image: 'assets/web-showcase-images/theturnkeycompany.webp',
      url: 'https://theturnkeycompany.com/',
      tags: ['Angular', 'Angular Material', 'Tailwind', 'Firebase']
    },
    {
  title: 'The Girls Room London',
  desc: 'The Girls Room London is a clinic-based informational landing page designed with a clean and modern UI. Built using Angular, Angular Material, Tailwind, and SCSS, it features responsive layouts and Web3Forms integration for seamless contact handling.',
  image: 'assets/web-showcase-images/thegirlsroom.webp',
  url: 'https://thegirlsroomlondon.com/',
  tags: ['Angular', 'Angular Material', 'Tailwind', 'SCSS', 'Web3Forms']
},
  {
  title: 'OctaLearn Platform',
desc: 'OctaLearn is a learning platform with student and admin panels, enabling course management, user operations, and real-time data handling. Built using Angular, Tailwind, and Firebase with jsPDF integration.',
  image: 'assets/web-showcase-images/octalearn.webp',
  url: 'https://octalearn.in/',
  tags: ['Angular', 'Angular Material', 'Tailwind', 'Firebase', 'Firestore', 'jsPDF']
},
    {
  title: 'Aarvi Ventures',
  desc: 'Aarvi Ventures is an informational website designed to showcase products and brand presence with a clean and responsive UI. Built using Angular, Tailwind, and SCSS, it focuses on smooth user experience and modern frontend design.',
  image: 'assets/web-showcase-images/aarviventures.webp',
  url: 'https://aarviventures.com/',
  tags: ['Angular', 'Tailwind', 'SCSS']
},
  {
  title: 'Winix India',
  desc: 'Winix India is a large-scale product-based website featuring 20+ pages, including detailed product pages and structured navigation. Built using Angular, Tailwind, and SCSS, it delivers a scalable architecture with clean UI and seamless browsing experience.',
  image: 'assets/web-showcase-images/winix.webp',
  url: 'https://winixindia.in/',
  tags: ['Angular', 'Tailwind', 'SCSS']
}
  ]);

  visibleProjects = computed(() => {
    return this.showAll() ? this.projects() : this.projects().slice(0, 4);
  });

  ngAfterViewInit() {
    Aos.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out'
    });
  }

  toggleProjects() {
    this.showAll.set(true);

    setTimeout(() => {
      Aos.refresh(); // 🔥 important
    }, 200);
  }
}
