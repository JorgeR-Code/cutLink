import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CutUrlService } from 'src/app/services/cut-url.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [MessageService]
})
export class InputComponent implements OnInit {

  input: string = '';




  constructor(private urlServiceValue: CutUrlService, private messageService: MessageService) { }

  ngOnInit(): void {

  }


  value(url: string){

    const control = new FormControl(url, Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}'));

    if(url && !control.errors){
      this.urlServiceValue.cutUrl(url);
      this.input = '';
    }else{
      this.showError();
      return
    }
  }
  showError() {
    this.messageService.add({key: 'tc', severity:'error', summary: 'URL no válida'});
  }

}
