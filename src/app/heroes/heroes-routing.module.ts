import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        redirectTo: '/heroes/heroes-list',
        pathMatch: 'full'
      },
      {
        path: 'heroes-list',
        component: HeroesListComponent
      },
      {
        path: 'heroes-detail/:charactereId',
        component: HeroesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
