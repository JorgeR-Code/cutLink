import { Component, OnInit } from '@angular/core';
import { CutUrlService } from 'src/app/cut-url.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  urlRequ: string = '';
  constructor(private urlServiceRe: CutUrlService) { }

  ngOnInit(): void {
    this.urlServiceRe.urlRequest.subscribe(url => this.urlRequ = url);
  }

}
