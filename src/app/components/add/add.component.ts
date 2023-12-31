import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Juego } from 'src/app/models/juego.model';
import { JuegoService } from 'src/app/services/juego.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  juego : Juego = new Juego();
  submitted = false;

  constructor(private http: HttpClient,
    private juegoService: JuegoService) { }

  ngOnInit(): void {
  }

  saveJuego(): void {
    this.juegoService.create(this.juego).then(() => {
      console.log('Se creó un nuevo juego exitosamente');
      this.submitted = true;
    });
  }

  newJuego(): void {
    this.submitted = false;
    this.juego = new Juego();
  }

}
