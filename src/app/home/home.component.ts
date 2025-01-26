import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  contenido: string;
  imagen: string;
}


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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias: Noticia[] = [];
  proyectos: Proyecto[] = [];
  proyectosDestacados: Proyecto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{noticias: Noticia[]}>('assets/noticias.json').subscribe(data => {
      this.noticias = data.noticias.slice(-4).reverse(); // Obtener las últimas 4 noticias
    });

    this.http.get<{proyectos: Proyecto[]}>('assets/projects.json').subscribe(data => {
      const proyecto1 = data.proyectos.find(p => p.id === 1);

      const proyectosOrdenados = data.proyectos
        .sort((a, b) => Number(b.fecha) - Number(a.fecha))
        .slice(0, 3);

      this.proyectosDestacados = proyecto1 ?
        [proyecto1, ...proyectosOrdenados.filter(p => p.id !== 1)] :
        proyectosOrdenados;
    });
  }
}
