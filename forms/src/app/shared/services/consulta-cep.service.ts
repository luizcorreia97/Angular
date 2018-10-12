import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: Http
  ) { }

  consultaCEP(cep: string) {

    cep = cep.replace(/\D/g, '');
    console.log(cep);

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        
        return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()));
      }
      else {
        return of ({})
      }
    }
  }
}
