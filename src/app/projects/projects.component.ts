import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import Aos from 'aos';

interface Project {
  id: number;
  title: string;
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
 activeProjectId: number = 1;
  isMobile: boolean = false;
  sectionVisible: boolean = false;
  sectionIntersectionObserver!: IntersectionObserver;

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for real-time analytics powered by machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Angular', 'Python', 'TensorFlow', 'D3.js'],
    },
    {
      id: 3,
      title: 'Mobile App Design System',
      category: 'UI/UX Design',
      description: 'Comprehensive design system with 200+ components for iOS and Android applications.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Figma', 'Design', 'Prototyping'],
    },
    {
      id: 4,
      title: 'Real-time Collaboration Tool',
      category: 'SaaS Application',
      description: 'WebSocket-based collaborative editor supporting 50+ simultaneous users with conflict resolution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Angular', 'WebSocket', 'Redis', 'PostgreSQL'],
    },
    {
      id: 5,
      title: 'IoT Smart Home System',
      category: 'IoT Development',
      description: 'Connected smart home platform with voice control integration and automated workflows.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tags: ['Angular', 'Arduino', 'MQTT', 'AWS IoT'],
    },
    {
      id: 6,
      title: 'Video Streaming Platform',
      category: 'Media Tech',
      description: 'Scalable video streaming service with adaptive bitrate and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=800&h=600&fit=crop',
      tags: ['Angular', 'FFmpeg', 'AWS', 'ML'],
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initAOS();
    this.checkScreenSize();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.sectionIntersectionObserver) {
      this.sectionIntersectionObserver.disconnect();
    }
  }

  private initAOS(): void {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }

  private setupIntersectionObserver(): void {
    const section = this.elementRef.nativeElement.querySelector('.projects-section');
    if (!section) return;

    this.sectionIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.sectionVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    this.sectionIntersectionObserver.observe(section);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
  }

  selectProject(projectId: number): void {
    this.activeProjectId = projectId;
  }

  get activeProject(): Project | undefined {
    return this.projects.find((p) => p.id === this.activeProjectId);
  }
}
