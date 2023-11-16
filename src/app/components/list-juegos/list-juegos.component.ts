import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import { Juego } from 'src/app/models/juego.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-juegos',
  templateUrl: './list-juegos.component.html',
  styleUrls: ['./list-juegos.component.scss']
})
export class ListJuegosComponent implements OnInit {

  juegos?: Juego[];
  currentJuego?: Juego;
  currentIndex = -1;
  title = '';

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.retrieveJuegos();
  }

  refreshList(): void {
    this.currentJuego = undefined;
    this.currentIndex = -1;
    this.retrieveJuegos();
  }

  retrieveJuegos(): void {

    this.juegoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.juegos = data;
    });

  }

  setActiveJuego(juego: Juego, index: number): void {
    this.currentJuego = juego;
    this.currentIndex = index;
  }

  removeAllJuegos(): void {

    this.juegoService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
