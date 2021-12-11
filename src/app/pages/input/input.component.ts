import { Component, OnInit } from '@angular/core';
import { CutUrlService } from 'src/app/cut-url.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  borar: string = 'kk';

  constructor(private urlServiceValue: CutUrlService) { }

  ngOnInit(): void {
  }


  value(url: string){
    if(url){
      this.urlServiceValue.requestUrl(url);
      console.log(url);
    }else{
      return
    }
  }
}
