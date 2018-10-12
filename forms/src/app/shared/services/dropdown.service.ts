import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class DropdownService {
  constructor(private http: Http) {}

  getEstadosBr() {
    return this.http.get('assets/dados/estadosbr.json')
    .pipe(map((res: Response) => res.json()));
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sr'}
    ]
  }

  getTecnologias(){
    return [
      { nome: 'java', desc: 'Java'},
      { nome: 'javascript', desc: 'JavaScript'},
      { nome: 'php', desc: 'PHP'},
      { nome: 'ruby', desc: 'Ruby'},
    ]
  }

  getNewsletter(){
    return [
      { valor: 'S', desc: 'Sim'},
      { valor: 'N', desc: 'Não'}
    ];
  }
}