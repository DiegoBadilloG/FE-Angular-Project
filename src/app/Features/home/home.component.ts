import { Component } from '@angular/core';
import { UrlBaseService } from '../../Services/url-base.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private expUrl: string = "/personal-exp.json";
  private ProjectsUrl: string = "/personal-projects.json";
  private knowladgeUrl: string = "/knownTools.json";
  private cvEsUrl: string = "/Resume-Diego-Badillo.pdf";
  private cvEnUrl: string = "/resume_Diego_Badillo_english.pdf";
  private fullExpUrl: string = "";
  private fullProjectsUrl: string = "";
  private fullKnowladgeUrl: string = "";

  linkeIn: string = "https://www.linkedin.com/in/diego-andres-b-b21405123/";
  gitHub: string = "https://github.com/DiegoBadilloG";
  fullDocUrl: string = "";
  imgUrl: string = "";
  expData: any;
  projectsData: any;
  webProjData: any;
  front: any;
  back: any;
  hw: any;
  learning: any;
  tools: any;

  aboutMe: string = "¡Hola! Soy Diego, un entusiasta del mundo digital con una pasión recién descubierta por el desarrollo front-end."
  +"Mi viaje comenzó en el fascinante campo de la ingeniería de computadores, donde exploré las complejidades del hardware y las maravillas de la tecnología."
  +"Mi trayectoria comenzó en la ingeniería de computadores, pero mi curiosidad me llevó al mundo del desarrollo web."
  +"Desde mis primeras prácticas, he crecido como desarrollador front-end. Actualmente, estoy enfocando en mejorar mis habilidades y finalizar mi proyecto "
  +"de fin de grado. Me motiva la posibilidad de aprender y crecer continuamente, explorando nuevas tecnologías y tendencias."

  constructor (private urlService: UrlBaseService, private httpService: HttpClient) {
    this.imgUrl = this.urlService.getImgUrl();
    this.fullExpUrl = this.urlService.getApiUrl() + this.expUrl;
    this.fullKnowladgeUrl = this.urlService.getApiUrl() + this.knowladgeUrl;

    this.fullProjectsUrl = this.urlService.getApiUrl() + this.ProjectsUrl;
    this.httpService.get(this.fullExpUrl).subscribe((data: any) => {
      this.expData = data.experience;
      this.expData.sort((elem1: any, elem2: any) =>elem2.year - elem1.year)
    });

    this.httpService.get(this.fullProjectsUrl).subscribe((data: any) => {
      this.projectsData = data.projects;
      this.webProjData = data.webProjects;
      this.projectsData.sort((elem1: any, elem2: any) =>elem2.year - elem1.year)
    });

    this.httpService.get(this.fullKnowladgeUrl).subscribe((data: any) => {
      this.front = data.front;
      this.back = data.back;
      this.hw = data.hw;
      this.learning = data.learning;
      this.tools = data.tools;
    });
  }

  downloadCV(type: string) {
    if(type === 'cv-es') {
      this.fullDocUrl = this.urlService.getDocUrl() + this.cvEsUrl;
    }else {
      this.fullDocUrl = this.urlService.getDocUrl() + this.cvEnUrl;
    }
    
    const a = document.createElement("a");
    a.href = this.fullDocUrl;
    a.download = "";
    a.click();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  navegateToUrl(site: string) {
    let url;
    const a = document.createElement("a");
    switch(site) {
      case 'gitHub':
        url = this.gitHub;
        break;
      case 'linkeIn':
        url = this.linkeIn;
        break;
      default:
        url = "";
    }
    a.href = url;
    a.target = "_blank";
    a.click();
  }
}
