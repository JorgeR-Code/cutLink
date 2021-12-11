import { Component, OnInit } from '@angular/core';
import { CutUrlService } from 'src/app/cut-url.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [MessageService]

})
export class ResultsComponent implements OnInit {

  urlRequ: string = '';

  constructor(private urlServiceRe: CutUrlService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  get resultados(){
    return this.urlServiceRe.results;
  }

  copy(textCopy: any){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = textCopy;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showError();
  }
  showError() {
    this.messageService.add({key: 'tc', severity:'info', summary: 'Copiado'});
  }
}
