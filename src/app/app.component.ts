import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FeProject';
  phone = "+34 663872089"
  email = "diegoabgomez@gmail.com"
  aboutUsLabel = "About us"
  aboutUsText = "Bienvenido a mi proyecto de portafolio. Este proyecto es un esfuerzo personal destinado a mejorar" +
                "mis habilidades en desarrollo frontend utilizando Angular, JavaScript, HTML y CSS. " +
                "Como desarrollador apasionado, estoy dedicado a aprender y aplicar las mejores prácticas para crear " +
                "una experiencia fluida y fácil de usar."
}
