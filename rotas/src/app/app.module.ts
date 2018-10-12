import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { AlunosComponent } from './alunos/alunos.component';
// import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
// import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { routing } from './../app/app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent,
    // AlunosComponent,
    // AlunoDetalheComponent,
    // AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // CursosModule,
    // AlunosModule
    // routing1
  ],
  // providers: [CursosService],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
