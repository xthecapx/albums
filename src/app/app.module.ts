import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api } from './services/api.service';
import { DataSource } from './services/data-source.service';
import { AlbumsComponent } from './components/albums.component';
import { PhotosComponent } from './components/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Api, DataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
