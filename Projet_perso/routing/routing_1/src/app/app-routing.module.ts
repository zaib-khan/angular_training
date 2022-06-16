import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path:'departements',component:DepartementListComponent},
  {path:'employee',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartementListComponent,EmployeeListComponent];