import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoAddComponent } from './components/curso-add/curso-add.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-listado-cursos',
    pathMatch: 'full'
  },
  {
    path: 'cursos',
    component: ListadoCursosComponent
  },
  {
    path: 'add',
    component: CursoAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
