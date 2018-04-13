import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {RequestsService} from "./requests.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [BrowserModule, CoreModule,
    HttpClientModule, AppRoutingModule, FormsModule,
    AboutModule, HomeModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    RequestsService,CommonModule

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
