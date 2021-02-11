import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss']
})
export class ListadoCursosComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursosServ: CursosService) { }

  ngOnInit(): void {
    this.mostrarCursos();
  }

  mostrarCursos() {
    this.cursosServ.getCursos()
      .subscribe( (res: any) => {
        this.cursos = res;
      },
      err => {
        console.log(err);
      });
  }

}
