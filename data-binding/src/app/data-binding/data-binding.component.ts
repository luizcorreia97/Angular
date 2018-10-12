import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles: [
  //   `
  //   .highlight{
  //     background-color: yellow;
  //     font-weight: bold;
  //   }
  //   `
  // ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Luiz',
    idade: 21
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCruso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  salvarValor(salvo){
    this.valorSalvo = salvo;
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
