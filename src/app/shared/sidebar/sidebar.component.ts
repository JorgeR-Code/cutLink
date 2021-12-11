import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  visibleSidebar1: boolean = false;

  constructor(private getHistorial: HistorialService) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.getHistorial.historial;
  }

}
