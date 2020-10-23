import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ItemsComponent } from './items.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ItemsComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ItemsModule { }
