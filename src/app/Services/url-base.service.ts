import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UrlBaseService {
    private baseUrl: string = "";
    private baseApiUrl: string = "";
    private imgUrl: string = "";

    constructor() {
        //If it neeeded, change here url base on platform (server/browser)
        this.baseUrl = "https://diegobadillog.github.io/FE-Angular-Project";
        this.baseApiUrl = this.baseUrl + "/browser/assets/apiMocks";
        this.imgUrl = this.baseUrl + "/browser/assets/images";
    }

    getBaseUrl() {
        return this.baseUrl;
    } 

    getApiUrl() {
        return this.baseApiUrl;
    }

    getImgUrl() {
        return this.imgUrl;
    }
}