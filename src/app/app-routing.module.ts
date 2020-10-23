import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { ItemsComponent }   from './items/items.component';
import { OneComponent }   from './items/one/one.component';
import { TwoComponent }   from './items/two/two.component';
import { UserComponent }   from './user/user.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'items', component: ItemsComponent, children: [ 
    {path: '1', component: OneComponent},
    {path: '2', component: TwoComponent}
  ]},
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
