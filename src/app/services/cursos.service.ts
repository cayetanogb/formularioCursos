import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url: string = 'http://localhost:3001/cursos';

  constructor(private http: HttpClient) { }

  // Devuelve todos los cursos
  getCursos(): Observable<Curso> {
    return this.http.get<Curso>(this.url);
  }

  // Crear curso
  addCurso(c: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, c);
  }
}
