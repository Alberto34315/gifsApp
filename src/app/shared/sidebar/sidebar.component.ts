import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historial() {
    return this.gifS.historial;
  }
  constructor(private gifS: GifsService) {}
  buscar(item: string) {
    this.gifS.buscarGifs(item);
  }
}
