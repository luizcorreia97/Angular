import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild{
    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            // console.log(route);
            // console.log(state);

            if (state.url.includes('editar')){
                // alert('Usuário sem permissão para editar!');
                // return Observable.of(false);
                // return false;
            }

            return true;
        }
}