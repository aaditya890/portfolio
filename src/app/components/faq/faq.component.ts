import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  activeIndex = 0;
  intervalId: any;
  private dialogService = inject(DialogService);


  // ✅ PORTFOLIO BASED FAQ
  faqs = [
    {
      id: '01',
      question: 'Can I download your resume/CV for more details?',
      answer: 'Yes, you can download my resume directly from my website. It includes my skills, projects, experience, and technical expertise in detail.',
      open: false
    },
    {
      id: '02',
      question: 'Are you available for freelance or project work?',
      answer: 'Yes, I am available for freelance projects, contract work, and collaborations. You can reach out to discuss your idea or requirements.',
      open: false
    },
    {
      id: '03',
      question: 'What technologies and tools do you use?',
      answer: 'I work with Angular, TypeScript, JavaScript, Tailwind CSS, SCSS, Angular Material, REST APIs, GitHub, Firebase, Supabase, and modern UI/UX design practices.',
      open: false
    },
    {
      id: '04',
      question: 'Do you build custom dashboards or CRM systems?',
      answer: 'Yes, I develop custom dashboards and CRM systems with features like real-time data, analytics, user roles, and scalable architecture.',
      open: false
    },
    {
      id: '05',
      question: 'Where can I see your projects and work?',
      answer: 'You can explore all my projects directly in the Projects section on this page. Each project highlights key features, technologies used, and real-world implementation.',
      open: false
    },
    {
      id: '06',
      question: 'How can I start working with you?',
      answer: 'You can click on “Consult Now” or “Book Slot” to get in touch. We will discuss your requirements and plan the project step by step.',
      open: false
    }
  ];

  // ✅ TESTIMONIALS
  testimonials: any[] = [
    {
      name: "Rahul Verma",
      role: "Startup Founder",
      quote: "Amazing developer! Clean UI, fast delivery, and great communication throughout the project."
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      quote: "The website design was modern and responsive. Loved the overall experience working together."
    },
    {
      name: "Amit Patel",
      role: "CRM Client",
      quote: "The CRM system built was exactly what we needed. Smooth performance and great UI."
    },
    {
      name: "Sneha Kapoor",
      role: "UI/UX Client",
      quote: "Great sense of design and user experience. Highly recommended for modern UI work."
    }
  ];

  // 🔄 AUTO SLIDER
  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  openContactDialog() {
    this.dialogService.openContactDialog();
  }

  // 🔽 FAQ TOGGLE (ONLY ONE OPEN - PRO UX)
  toggleFAQ(index: number) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    }));
  }

  // ▶️ NEXT
  next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  // ◀️ PREV
  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
