import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'cursos', component: CursosComponent},
  {path:'curso/:id', component: CursoDetalheComponent},
  {path:'login', component: LoginComponent},
  {path:'naoEncontrado', component: CursoNaoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
