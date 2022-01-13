import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material.module";
import { ViewCardComponent } from './view-card/view-card.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { SearchComponent } from './search/search.component';
import { ScrollingModule } from "@angular/cdk/scrolling";


@NgModule({
  declarations: [
    ViewCardComponent,
    ViewDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ScrollingModule
  ],
  exports: [
    ViewCardComponent,
    ViewDetailComponent,
    SearchComponent,
  ]
})
export class ComponentsModule { }
