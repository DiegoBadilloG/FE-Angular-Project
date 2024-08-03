import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {MatCardModule } from '@angular/material/card';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-pwd-managger',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIcon,
    MatButton,
    FormsModule
  ],
  templateUrl: './pwd-managger.component.html',
  styleUrl: './pwd-managger.component.css'
})
export class PwdManaggerComponent {
  showPwd: boolean = false;
  rawData: any;
  copyRawData: any;
  data: any;
  appsList: any
  url: string = '/api/pwd-manager.json';
  private apiUrl: string = "/api/pwd-manager.json";
  private fullUrl: string = " https://diegobadillog.github.io/FE-Angular-Project/api/pwd-manager.json"
  newAppName: string = "";
  newPwd: string = "";
  disabledSaveBtn: boolean = true;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private httpService: HttpClient) {
    this.url = isPlatformBrowser(this.platformId)? this.apiUrl : this.fullUrl;

    this.data = this.httpService.get(this.url)
    .pipe(
      catchError((error: any) => {
        throw new Error(error);
      })
    )
    .subscribe((data: any) => {
      this.rawData = data;
      this.appsList = this.rawData.pwdManager;
      this.appsList.forEach((elem: any) => {
        elem.showPwd = false;
      });
    });
  }

  togglePwdVisibility(app: any) {
    app.showPwd = !app.showPwd;
  }

  generateNewPwd() {
    let result: string = "";
    for (let i = 0; i<14; i++) {
      const indice = Math.floor(Math.random() * 95 + 32);
      result += String.fromCharCode(indice);
    }

    this.newPwd = result;
  }

  saveNewPwd() {
    if(this.newAppName &&  this.newPwd) {
      let newApp = {
        appname: this.newAppName,
        pwd: this.newPwd
      }
      this.copyRawData = _.cloneDeep(this.rawData);
      this.rawData.pwdManager.push(newApp);

      this.httpService.post(this.url, this.rawData);
      this.resetFrom();
      this.disabledSaveBtn = true;
    }
  }

  resetFrom() {
    this.newAppName = "";
    this.newPwd = "";
  }
}
