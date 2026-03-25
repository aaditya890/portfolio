import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = signal<Skill[]>([
    { name: 'Angular', icon: 'assets/tagsLogo/angular.png', category: 'Frontend' },
    { name: 'JavaScript', icon: 'assets/tagsLogo/javascript.png', category: 'Language' },
    { name: 'TypeScript', icon: 'assets/tagsLogo/typescript.png', category: 'Language' },
    { name: 'HTML', icon: 'assets/tagsLogo/html.png', category: 'Web' },
    { name: 'CSS', icon: 'assets/tagsLogo/css.png', category: 'Web' },
    { name: 'SCSS', icon: 'assets/tagsLogo/saas.png', category: 'Web' },
    { name: 'Tailwind', icon: 'assets/tagsLogo/tailwind.png', category: 'Web' },
    { name: 'Supabase', icon: 'assets/tagsLogo/supabase.png', category: 'Tools' },
    { name: 'Firebase', icon: 'assets/tagsLogo/firebase.png', category: 'Tools' },
    { name: 'Google Ads', icon: 'assets/tagsLogo/google-ads.png', category: 'Marketing' },
    { name: 'GitHub', icon: 'assets/tagsLogo/github.png', category: 'Tools' },
    { name: 'Jira', icon: 'assets/tagsLogo/jira.png', category: 'Tools' },

  ]);
}