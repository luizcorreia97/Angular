import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Curso } from './cursos.model';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) { }

  title = 'CURSOS';
  formulario: FormGroup;
  curso: Curso = {};
  selected: Curso;
  newCurso: boolean = true;
  cursos: Curso[] = [
    { id: 1, descricao: "Sistemas de Informação" },
    { id: 2, descricao: "Administração" },
    { id: 3, descricao: "Direito" }
  ];

  @ViewChild('inputFocus') focusIn: ElementRef;
  buttonSave = 'Adicionar';
  msgs = [];

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: new FormControl({ value: null, disabled: true }),
      descricao: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZÀ-ú ]*")])]
    });
  }

  autoIncrement() {
    var increment;
    if (this.cursos.length > 0) {
      increment = Object.keys(this.cursos).length + 1;
    }
    else {
      increment = 1;
    }
    return increment;
  };

  save() {
    console.log(this.formulario);
    let curso = [...this.cursos];
    this.curso.descricao = this.formulario.value.descricao;

    if (this.newCurso) {
      this.curso.id = this.autoIncrement();
      this.cursos = [...this.cursos, this.curso];
      this.message('success', 'Confirmação', 'Registro adicionado com sucesso.');
    }
    else {
      curso[this.cursos.indexOf(this.selected)] = this.curso;
      this.cursos = curso;
      this.message('success', 'Confirmação', 'Registro atualizado com sucesso.');
    }

    this.buttonSave = 'Adicionar';
    this.newCurso = true;
    this.curso = {};
    this.formulario.reset();
    this.focus();
    // this.cursos = [...this.cursos];
  }

  onRowSelect(event) {
    console.log(event);
    this.newCurso = false;
    this.curso = this.clone(event.data);
    this.buttonSave = 'Atualizar';
    this.focus();
    this.formulario.patchValue({
      id: this.curso.id,
      descricao: this.curso.descricao
    });
  }

  confirmDelete() {
    this.confirmationService.confirm({
      message: `Deseja realmente excluir '${this.curso.descricao}'?`,
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.delete();
        this.message('success', 'Confirmação', 'Registro excluído com sucesso.');
      }
    });
  }

  confirmCopy() {
    this.confirmationService.confirm({
      message: `Deseja realmente fazer uma cópia de '${this.curso.descricao}'?`,
      header: 'Confirmação de Cópia',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.copy();
        this.message('success', 'Confirmação', 'Registro copiado com sucesso.');
      }
    });
  }

  confirmClear() {
    this.confirmationService.confirm({
      message: `Deseja realmente limpar o formulário?`,
      header: 'Confirmação de Limpeza',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.clear();
        this.message('success', 'Confirmação', 'Formulário limpo com sucesso.');
      }
    });
  }

  delete() {
    let index = this.cursos.indexOf(this.selected);
    this.cursos = this.cursos.filter((val, i) => i != index);
    this.curso = {};
    this.formulario.reset();
    this.buttonSave = 'Adicionar';
    this.focus();
  }

  clone(c: Curso): Curso {
    let obj = {};
    for (let prop in c) {
      obj[prop] = c[prop];
    }
    return obj;
  }

  copy() {
    this.formulario.patchValue({
      id: null
    });
    this.buttonSave = 'Adicionar';
    this.focus();
  }

  clear() {
    this.formulario.reset();
    this.buttonSave = 'Adicionar';
    this.focus();
  }

  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    this.focusIn.nativeElement.focus();
  }

  message(type, header, body) {
    this.msgs.push({ severity: type, summary: header, detail: body });
  }
}
