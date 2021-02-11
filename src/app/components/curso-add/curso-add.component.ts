import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.scss']
})
export class CursoAddComponent implements OnInit {

  curso: Curso;

  myForm: FormGroup;
  titulo: FormControl;
  autor: FormControl;
  imagen: FormControl;
  duracion: FormControl;
  tipo: FormControl;

  constructor(private activatedRoute: ActivatedRoute, private cursosServ: CursosService, private route: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      duracion: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required)
    });

    this.validations();
  }

  validations(): void{
    this.titulo = this.myForm.controls.titulo as FormControl;
    this.autor = this.myForm.controls.autor as FormControl;
    this.imagen= this.myForm.controls.imagen as FormControl;
    this.duracion = this.myForm.controls.duracion as FormControl;
    this.tipo = this.myForm.controls.tipo as FormControl;
  }

  add() {
    if (this.myForm.valid) {
      let c: Curso = {
        titulo: this.myForm.controls.titulo.value,
        autor: this.myForm.controls.autor.value,
        imagen: this.myForm.controls.imagen.value,
        duracion: this.myForm.controls.duracion.value,
        tipo: this.myForm.controls.tipo.value
      }

      this.cursosServ.addCurso(c)
        .subscribe( (res: any) => {
          console.log(res);
          this.route.navigate(['/cursos']);
        },
        err => {
          console.log(err);
        });
    }
  }
}
