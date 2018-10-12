import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Luiz', email: 'luiz@email.com'},
    {id: 2, nome: 'Juliana', email: 'juliana@email.com'},
    {id: 3, nome: 'Patrick', email: 'patrick@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let index = 0; index < this.alunos.length; index++) {
      let aluno = this.alunos[index];

      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}