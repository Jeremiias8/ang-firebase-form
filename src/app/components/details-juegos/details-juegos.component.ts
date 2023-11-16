import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Juego } from 'src/app/models/juego.model';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-details-juegos',
  templateUrl: './details-juegos.component.html',
  styleUrls: ['./details-juegos.component.scss']
})
export class DetailsJuegosComponent implements OnInit {

  @Input() juego?: Juego;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentJuego: Juego = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
  }

}
