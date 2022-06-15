import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './music/music.component';
import { CelebsComponent } from './artist/artist.component';
import { AddComponent } from './add/add.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CelebsComponent,
    AddComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
