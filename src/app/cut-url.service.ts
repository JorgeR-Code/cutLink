import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URLResponse } from './interfaces/url.interface';

@Injectable({
  providedIn: 'root'
})
export class CutUrlService {

  private urlApi: string = 'https://api.shrtco.de/v2/shorten?url';

  public results!: URLResponse;

  constructor(private http: HttpClient) { }

  cutUrl (termino: string){
    const url = `${this.urlApi}=${termino}`;
    this.http.get<URLResponse>(url).subscribe((resp) => {
      this.results = resp;

    })
  }

}
