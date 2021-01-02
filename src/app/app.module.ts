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
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainIndexComponent,
    SillasComponent,
    DonarComponent,
    AboutUsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
