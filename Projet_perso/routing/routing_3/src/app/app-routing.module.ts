import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatPageComponent } from './cat-page/cat-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cat-page/:id',component:CatPageComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
