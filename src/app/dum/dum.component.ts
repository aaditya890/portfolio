import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ServiceComponent } from "../service/service.component";
import { AboutComponent } from "../about/about.component";
import { FaqComponent } from "../faq/faq.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-dum',
  standalone: true,
  imports: [SkillsComponent, ProjectsComponent, ServiceComponent, AboutComponent, FaqComponent, FooterComponent, NavbarComponent, HomeComponent],
  templateUrl: './dum.component.html',
  styleUrl: './dum.component.scss'
})
export class DumComponent {

}
