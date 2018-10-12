import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular2'];

  filtro: string;

  addCurso(valor){

    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(v => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  // PROMISE - PROMESSAS
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono depois de 2 segundos'), 2000)
  });

  // OBSERVABLE - PROGRAMAÇÃO REATIVA
  valorAsync2 = Observable.interval(3000)
    .map(valor => 'Valor assíncrono depois de 3 segundos');

  constructor() { }

  ngOnInit() {
  }

}
