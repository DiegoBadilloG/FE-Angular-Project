import { UrlBaseService } from './../../Services/url-base.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
export class ECommercialComponent implements OnInit {
  imgRoute: string = "";

  eshopMainBtn: any;
  displayShoes: boolean = false;
  displayMan: boolean = false;
  displayWoman: boolean = false;
  displayKid: boolean = false;
  displayNew: boolean = false;
  displaySport: boolean = false;
  private leaveTimeout!: any;

  private eShopUrl: string = "/e-commercial.json";
  private fullUrl: string = "";
  mainBanner: any; 
  newElems: any;
  bestElems: any;
  soonElems: any;
  sldElems: any;
  newBtn: boolean = false;
  bestBtn: boolean = false;
  soonBtn: boolean = false;
  private prevSliderBtnSelected: string = "";

  constructor(@Inject(PLATFORM_ID) private platformId: any, private urlBaseService: UrlBaseService, private httpService: HttpClient) {
    this.imgRoute = this.urlBaseService.getImgUrl();
    this.fullUrl = this.urlBaseService.getApiUrl() + this.eShopUrl;

    this.httpService.get(this.fullUrl).subscribe((data: any) => {
      this.newElems = data.eCommercialHome.newElems;
      this.mainBanner = data.eCommercialHome.banerElems;
      this.bestElems = data.eCommercialHome.theBestElems;
      this.soonElems = data.eCommercialHome.soonElems;
      this.sldElems = data.eCommercialHome.sliderElems;
    })
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      alert("Página en construcción. Algunas funcionalidades pueden no estar disponibles. ¡Gracias por tu comprensión!");
      let selectedBtn = document.getElementById('newBtn');
      if (selectedBtn) {
        selectedBtn.classList.add('active');
      }
      this.newBtn = true;
      this.prevSliderBtnSelected = 'newBtn';
    }
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
    }, 1);
  }

  toggleSliderBtn(elem: any, elemId: string) {
    this.toggleStyleSliderBtn(this.prevSliderBtnSelected);
    this.prevSliderBtnSelected = elem;
    switch(elem) {
      case 'newBtn':
        this.newBtn = true;
        this.bestBtn = false;
        this.soonBtn = false;
        break;
      case 'bestBtn':
        this.newBtn = false;
        this.bestBtn = true;
        this.soonBtn = false;
        break;
      case 'soonBtn':
        this.newBtn = false;
        this.bestBtn = false;
        this.soonBtn = true;
        break;
      default: 
        null;
    }
    this.toggleStyleSliderBtn(elemId);
  }

  toggleStyleSliderBtn(elemId: string) {
    let item = document.getElementById(elemId);
    if (item?.classList.contains('active')) {
      item.classList.remove('active')
    }
    else {
      item?.classList.add('active');
    }
    
  }

}
