import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './music/music.component';
import { CelebsComponent } from './artist/artist.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'celebs', component: CelebsComponent
  },
  {
    path: 'add', component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
