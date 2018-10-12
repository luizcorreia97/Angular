import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}