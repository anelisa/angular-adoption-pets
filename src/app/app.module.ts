import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { RegisterPetComponent } from './components/register-pet/register-pet.component';
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    RegisterPetComponent,
    ListPetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'API_BASE_URL',
      useValue: 'http://localhost:3000'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
