import { UrlBaseService } from './../../Services/url-base.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-commercial',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './e-commercial.component.html',
  styleUrl: './e-commercial.component.css'
})
export class ECommercialComponent {
  imgRoute: string = "";

  eshopMainBtn: any;
  displayShoes: boolean = false;
  displayMan: boolean = false;
  displayWoman: boolean = false;
  displayKid: boolean = false;
  displayNew: boolean = false;
  displaySport: boolean = false;
  private leaveTimeout!: any;

  constructor(private urlBaseService: UrlBaseService) {
    this.imgRoute = this.urlBaseService.getImgUrl();
  }

  showElem(elem: any) {
    clearTimeout(this.leaveTimeout);
    switch (elem) {
      case 'shoes':
        this.displayShoes = true;
        break;
      case 'man': 
        this.displayMan = true;
        break;
      case 'woman':
        this.displayWoman = true;
        break;
      case 'kid':
        this.displayKid = true;
        break;
      case 'new':
        this.displayNew = true;
        break;
      case 'sport':
        this.displaySport = true;
        break;
      default:
        break;
    }
  }

  hiddenElem(elem: any) {
    this.leaveTimeout = setTimeout(() => {
      switch (elem) {
        case 'shoes':
          this.displayShoes = false;
          break;
        case 'man': 
          this.displayMan = false;
          break;
        case 'woman':
          this.displayWoman = false;
          break;
        case 'kid':
          this.displayKid = false;
          break;
        case 'new':
          this.displayNew = false;
          break;
        case 'sport':
          this.displaySport = false;
          break;
      }  
    }, );
  }
}
