import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
/**
 * rutas
 */
import { AppRoutingModule } from 'src/app/app.routes';


 /**
  * Componentes
  */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormulariosComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
