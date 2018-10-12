import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/EstadoBr';
import { collectExternalReferences } from '@angular/compiler';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  // estados: EstadoBr[];
  estados: Observable<EstadoBr[]>;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  validaCep: boolean = false;
  cepNaoEncontrado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {



    // this.formulario = new FormGroup({
    //   none: new FormControl('Luiz'),
    //   email: new FormControl('luiz@gmail.com'),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null);
    //   })
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: null,
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      cargo: [null],
      tecnologias : [null],
      newsletter: ['S'],
      termos: [null],
      framerworks: this.buildFrameworks()
    });

    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    // nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],

    // this.dropdownService.getEstadosBr()
    //   .subscribe(dados => {
    //     this.estados = dados
    //     console.log(this.estados);
    //   });

    this.estados = this.dropdownService.getEstadosBr();

    this.listaEstadosConsole();

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    // console.log('form: ' + this.formulario.get('frameworks').c);

    let testing = this.formulario.get('frameworks');
    console.log('frameworks: ' + testing);

  }

  buildFrameworks() {

    const values = this.frameworks.map(v => {console.log(v)}, new FormControl(false));
    console.log(this.formBuilder.array(values));
    return this.formBuilder.array(values);

    /* this.formBuilder.array([
      new FormControl(false), // Angular
      new FormControl(false), // Vue
      new FormControl(false), // React
      new FormControl(false)  // Sencha
    ]); */
  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(response => response))
        .subscribe(dados => {
          console.log(dados)
          // Reseta o form
          // this.resetar();
        },
          (error: any) => alert('erro'));
    }
    else {
      console.log('formulario invalido');
      this.verificarValidacoesForm(this.formulario);
    }
  }

  verificarValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificarValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    // this.formulario.controls[campo]
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
    // return campo.invalid && campo.touched;
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssValidation(campo: string) {
    return {
      // 'has-success': campo.valid && campo.touched,
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  // CONSULTA CEP BUSCANDO O SERVIÇO DIRETO PELO COMPONENT
  // consultaCEP() {
  //   let cep = this.formulario.get('endereco.cep').value;
  //   //Nova variável "cep" somente com dígitos.
  //   cep = cep.replace(/\D/g, '');
  //   console.log(cep);

  //   //Verifica se campo cep possui valor informado.
  //   if (cep != "") {
  //     //Expressão regular para validar o CEP.
  //     var validacep = /^[0-9]{8}$/;
  //     //Valida o formato do CEP.
  //     if (validacep.test(cep)) {
  //       this.limpaFormEndereco();
  //       this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  //         .pipe(map(dados => dados.json()))
  //         .subscribe(dados => this.populaDadosForm(dados));
  //     }
  //     if (!validacep.test(cep) && cep != "") {
  //       this.validaCep = true;
  //       this.limpaFormEndereco();
  //     }
  //   }
  //   else {
  //     this.validaCep = false;
  //   }
  // }

  // CONSULTA CEP BUSCANDO DO SERVIÇO
  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== ''){
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          this.populaDadosForm(dados),
          console.log(dados)
        },
        (error: any) => console.log('erro: ' + error));
    }
    else {
      this.validaCep = false;
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.validaCep = false;
    this.formulario.get('nome').setValue('Luiz');
  }

  limpaFormEndereco() {
    this.formulario.patchValue({
      endereco: {
        // cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  listaEstadosConsole() {
    console.log('teste:' + this.estados);
  }

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(){
    this.formulario.get('tecnologias').setValue(['java','javascript','php']);
  }

}
