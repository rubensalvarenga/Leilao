
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtigoComponent } from './componentes/artigo/artigo.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CardComponent } from './componentes/card/card.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ArtigonewComponent } from './componentes/artigonew/artigonew.component';
import { CategorianewComponent } from './componentes/categorianew/categorianew.component';
import { NgxvideoComponent } from './componentes/ngxvideo/ngxvideo.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { HelloComponent } from './hello.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { NgModule } from '@angular/core';
import { ImovelComponent } from './componentes/imovel/imovel.component';
import { RelogioComponent } from './componentes/relogio/relogio.component';





@NgModule({
  declarations: [
    AppComponent,
    ArtigoComponent,
    CabecalhoComponent,
    CardComponent,
    CarrosselComponent,
    CategoriaComponent,
    PesquisaComponent,
    RodapeComponent,
    ArtigonewComponent,
    CategorianewComponent,
    HelloComponent,
    NgxvideoComponent,
    ImovelComponent,
    RelogioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    ReactiveFormsModule,
    NgxSliderModule,
    FormsModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    PaginationModule,
    NgxYoutubePlayerModule.forRoot(),





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
