import { Component, computed, signal } from '@angular/core';


interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = signal<Skill[]>([
    { name: 'C#', icon: 'devicon-csharp-plain', color: '#8b5cf6' },
    { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#dd0031' },
    { name: 'React', icon: 'devicon-react-original', color: '#61dafb' },
    { name: 'Node', icon: 'devicon-nodejs-plain', color: '#8cc84b' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#10b981' },
    { name: 'HTML', icon: 'devicon-html5-plain', color: '#f97316' },
    { name: 'CSS', icon: 'devicon-css3-plain', color: '#3b82f6' }
  ]);

  activeIndex = signal(0);
  rotation = signal(0);

  private intervalId: any;

  constructor() {
    this.startAutoRotate();
  }

  startAutoRotate() {
    const step = 360 / this.skills().length;

    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => {
        const next = (i + 1) % this.skills().length;
        this.rotation.set(-(step * next));
        return next;
      });
    }, 2000);
  }

  activeSkill = computed(() => this.skills()[this.activeIndex()]);

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}