import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosService } from './../alunos/alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoDetalheComponent,
        AlunoFormComponent
    ],
    providers: [
        AlunosService,
        AlunosDeactivateGuard
    ]
})
export class AlunosModule {}