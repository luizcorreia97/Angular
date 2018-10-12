import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    // nome: 'Luiz',
    // email: 'luiz@email.com'
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: null,
      complemento: null,
      rua: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  }

  validaCep: boolean = false;
  cepNaoEncontrado: boolean = false;

  onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(map(response => response))
      .subscribe(dados => {
        console.log(dados)
        form.form.reset();
      });
  }

  verificaValidTouched(campo) {
    return campo.invalid && campo.touched;
  }

  aplicaCssValidation(campo) {
    return {
      'has-success': campo.valid && campo.touched,
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form) {
    console.log(cep);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    console.log(cep);

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()))
          .subscribe(dados => this.populaDadosForm(dados, form));
          // .subscribe(dados => this.populaDadosForm(dados, form));
          // a => (a < 10) ? 'valid' : 'invalid'
      }
      if (!validacep.test(cep) && cep != ""){
        this.validaCep = true;
        this.limpaFormEndereco();
      }
      else {
        //  this.validaCep = true;
      }
    }
    else {
      this.validaCep = false;
    }
  }

  limpaFormEndereco(){
    this.usuario.endereco.rua = null;
    this.usuario.endereco.bairro = null;
    this.usuario.endereco.cidade = null;
    this.usuario.endereco.estado = null;
  }

  populaDadosForm(dados, formulario) {
    console.log(dados);
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     complemento: dados.complemento,
    //     numero: this.usuario.endereco.numero,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,      
    //   numero: this.usuario.endereco.numero
    // });

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.validaCep = false;
    // console.log(formulario);
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

}