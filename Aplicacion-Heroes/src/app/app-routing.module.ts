import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import {HeroeComponent} from './components/heroe/heroe.component'
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [

  {path: 'heroes' , component: HeroesComponent},
  {path: 'heroe/:id' , component: HeroeComponent},
  {path: 'buscar/:termino' , component: BuscadorComponent},
  {path: '**', pathMatch: 'full' ,redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

