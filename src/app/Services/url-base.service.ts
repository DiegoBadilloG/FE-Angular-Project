import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UrlBaseService {
    private baseUrl: string = "";
    private baseApiUrl: string = "";
    private imgUrl: string = "";
    private docUrl: string = "";

    constructor() {
        //If it neeeded, change here url base on platform (server/browser)
        this.baseUrl = environment.apiBaseUrl;
        if (environment.production) {
            this.baseApiUrl = this.baseUrl + "/assets/apiMocks";
        } else {
            this.baseApiUrl = this.baseUrl + "/api";
        }
        this.imgUrl = this.baseUrl + "/assets/images";
        this.docUrl = this.baseUrl + "/assets/documents";
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

    getDocUrl() {
        return this.docUrl;
    }
}