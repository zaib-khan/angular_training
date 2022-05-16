import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { FollowersComponent } from './followers/followers.component';



const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'followers/:id/:username',
  component:PostComponent
},
{
  path:'followers',
  component:FollowersComponent

},
{
  path:'**',
  component:NotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
