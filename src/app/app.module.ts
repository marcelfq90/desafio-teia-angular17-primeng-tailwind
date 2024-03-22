import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Table } from './components/table/table.component';
import { Header } from './components/header/header.component';
import { IndicatorCard } from './components/indicator-card/indicator-card.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PhotoAlbumComponent } from './components/photo-album/photo-album.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [AppComponent, Table, PhotoAlbumComponent, PhotoCardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    Header,
    IndicatorCard,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
