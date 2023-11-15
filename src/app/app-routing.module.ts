import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
    path: 'tutorials', component: TutorialsComponent
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
