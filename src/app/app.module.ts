import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Layouts/footer/footer.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { SillasComponent } from './sillas/sillas.component';
import { NavBarComponent } from './Layouts/nav-bar/nav-bar.component';
import { DonarComponent } from './donar/donar.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainIndexComponent,
    SillasComponent,
    DonarComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
