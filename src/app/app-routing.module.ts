import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
    path: 'juegos', component: JuegosComponent
  },
  {
    path: 'list-juegos', component: ListJuegosComponent
  },
  {
    path: 'add', component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
