import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieNameMakerComponent } from './movie-name-maker/movie-name-maker.component';
import { MovieNameMakerPipePipe } from './movie-name-maker-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieNameMakerComponent,
    MovieNameMakerPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
