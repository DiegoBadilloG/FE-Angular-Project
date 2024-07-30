import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  myName: string = 'Diego';

  faq1: string = '¿Quién eres y cuál es tu experiencia en el desarrollo front-end?';
  faq1_anw: string = 'Soy ' +this.myName +', un desarrollador front-end con formación en ingeniería de computadores.' 
  +' Comencé mi carrera en el mundo del hardware y posteriormente me adentré en el desarrollo front-end.' 
  +' He trabajado como desarrollador front-end en una empresa de telecomunicaciones, donde he adquirido experiencia en proyectos web de gran escala.'

  faq2: string = '¿Qué tipo de proyectos has realizado en el desarrollo front-end?';
  faq2_anw: string = 'He participado en una variedad de proyectos front-end, desde aplicaciones web corporativas hasta interfaces '
  +'de usuario interactivas. He trabajado en la creación de sitios web responsivos, aplicaciones web de comercio electrónico'
  +' y sistemas de gestión de contenido, entre otros.'

  faq3: string = '¿Cuál es tu enfoque en el desarrollo front-end y qué tecnologías dominas?';
  faq3_anw: string = ' Mi enfoque se centra en la creación de experiencias de usuario intuitivas y atractivas.'
  +' Tengo experiencia en HTML, CSS y JavaScript, así como en frameworks y bibliotecas como Angular, AngularJS, Material.'
  +' También estoy familiarizado con herramientas de desarrollo y control de versiones como Git y Webpack.'

  faq4: string = '¿Qué te motiva a seguir aprendiendo y creciendo como desarrollador front-end?';
  faq4_anw: string = 'Me apasiona la rápida evolución del desarrollo front-end y la oportunidad de trabajar '
  +'en la intersección entre la tecnología y la creatividad. Me motiva la posibilidad de aprender nuevas '
  +'tecnologías, explorar las últimas tendencias y contribuir al éxito de proyectos innovadores.'

  faq5: string = '¿Cuáles son tus planes futuros en el campo del desarrollo front-end?';
  faq5_anw: string = 'Planeo seguir ampliando mis habilidades y conocimientos en el desarrollo front-end, '
  +'participar en proyectos desafiantes y continuar creciendo profesionalmente. Mi objetivo es seguir '
  +'explorando nuevas oportunidades y contribuir al avance del mundo digital a través de proyectos significativos y creativos.'

  faq6: string = '¿Cuál es tu expectativa salarial como desarrollador front-end?';
  faq6_anw: string = ' Mi expectativa salarial se basa en mi experiencia, habilidades '
  +'y el valor que puedo aportar a un equipo o proyecto. Estoy abierto a discutir detalles'
  +' específicos sobre salarios y beneficios en función de las responsabilidades y el alcance del puesto ofrecido.'

  faq7: string = '¿Cuál ha sido tu experiencia previa como desarrollador front-end?';
  faq7_anw: string = 'Antes de mi posición como desarrollador front-end en una '
  +'empresa de telecomunicaciones, tuve la oportunidad de realizar prácticas curriculares '+
  'donde aprender a traves de proyectos web reales. Además, mi formación en ingeniería de '
  +'computadores me proporcionó una sólida base técnica para mi transición al desarrollo front-end.'

  faq8: string ='¿Has trabajado en proyectos independientes o freelance como desarrollador front-end?';
  faq8_anw: string = 'Sí, he tenido la oportunidad de trabajar en proyectos independientes '
  +'como desarrollador front-end pero no como freelance. Estas experiencias me han permitido trabajar en una variedad de proyectos, '+
  'desde la creación de sitios web personalizados hasta la optimización de la experiencia de usuario para aplicaciones existentes.'

  faq9: string = '¿Qué tipo de proyectos front-end estás buscando actualmente?';
  faq9_anw: string = 'Actualmente, estoy buscando oportunidades para participar en proyectos '
  +'front-end que me permitan aplicar mis habilidades en el desarrollo web y contribuir al éxito de equipos '
  +'multidisciplinarios. Estoy especialmente interesado en proyectos que utilicen Angular como framework principal.'
}
