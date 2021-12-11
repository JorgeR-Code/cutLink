import { Component, OnInit } from '@angular/core';
import { CutUrlService } from 'src/app/services/cut-url.service';
import { Message, MessageService } from 'primeng/api';
import { HistorialService } from 'src/app/services/historial.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [MessageService]

})
export class ResultsComponent implements OnInit {





  constructor(private urlServiceRe: CutUrlService, private messageService: MessageService, private historialService: HistorialService) { }

  ngOnInit(): void {
  }

  get resultados(){
    return this.urlServiceRe.results;
  }

  get error(){

    return this.urlServiceRe.error;
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
    this.showCopy();
    this.historialService.insertarHistorial(selBox.value);
  }
  showCopy() {
    this.messageService.add({key: 'tc', severity:'info', summary: 'Copiado'});
  }
}
