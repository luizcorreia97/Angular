import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { BoundCallbackObservable } from 'rxjs/observable/BoundCallbackObservable';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent>{
    
    canDeactivate(
        component: AlunoFormComponent,
        rute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        console.log('Guarda de desativação');
        return true;
        // return !component.formMudou;
        // return component.podeMudarRota();
    }
}