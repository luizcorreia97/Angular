import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './../alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes = [
    { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
        { path: 'novo', component: AlunoFormComponent},
        { path: ':id', component: AlunoDetalheComponent},
        { path: ':id/editar', component: AlunoFormComponent,
            CanDeactivate: [AlunosDeactivateGuard]
        }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}