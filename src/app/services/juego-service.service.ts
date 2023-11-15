import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Juego } from '../models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiceService {
  private dbPath = '/juegos';

  juegosRef: AngularFireList<Juego>;

  constructor(private db: AngularFireDatabase) {

    this.juegosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Juego> {
    return this.juegosRef;
  }

  create(juego: Juego): any {
    return this.juegosRef.push(juego);
  }

  update(key: string, value: any): Promise<void> {
    return this.juegosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.juegosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.juegosRef.remove();
  }
}
