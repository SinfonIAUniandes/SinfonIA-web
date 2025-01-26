import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Noticia {
  id: number;
  titulo: string;
  fecha: string;
  contenido: string;
  imagen: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{noticias: Noticia[]}>('assets/noticias.json').subscribe(data => {
      this.noticias = data.noticias.sort((a, b) =>
        new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
      );
    });
  }
}
