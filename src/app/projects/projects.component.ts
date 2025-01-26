import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Proyecto {
  id: number;
  titulo: string;
  fecha: string;
  contenido: string;
  imagen: string;
  tags: string[];
  estado: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{proyectos: Proyecto[]}>('assets/projects.json').subscribe(data => {
      this.proyectos = data.proyectos;
    });
  }
}
