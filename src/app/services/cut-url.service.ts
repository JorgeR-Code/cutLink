import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URLResponse } from '../interfaces/url.interface';
import { ErrorResponse } from '../interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class CutUrlService {

  private urlApi: string = 'https://api.shrtco.de/v2/shorten?url';

  public results!: URLResponse;
  public resultsR!: URLResponse;
  public error!: ErrorResponse;
  public errorR!: ErrorResponse;

  constructor(private http: HttpClient) { }

  cutUrl (termino: string){
    const url = `${this.urlApi}=${termino}`;
    this.http.get<URLResponse>(url).subscribe(

      result => {
        this.error = this.errorR;
        this.results = result;
      },
      error => {
        this.results = this.resultsR;
        this.error = error.error;
      }
    )
  }

}
