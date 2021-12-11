import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [MessageService]
})
export class SidebarComponent implements OnInit {

  visibleSidebar1: boolean = false;

  constructor(private getHistorial: HistorialService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.getHistorial.historial;
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
  }
  showCopy() {
    this.messageService.add({key: 'tc', severity:'info', summary: 'Copiado'});
  }

}
