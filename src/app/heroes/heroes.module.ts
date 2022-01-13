import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes.component';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroesDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class HeroesModule { }
