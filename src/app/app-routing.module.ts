import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurguerBuilderComponent } from './burguer-builder/burguer-builder.component';
import { BurguerListComponent } from './burguer-list/burguer-list.component';

const routes: Routes = [
  { path: 'create', component: BurguerBuilderComponent },
  { path: 'list', component: BurguerListComponent },
  { path: '**', component: BurguerBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
