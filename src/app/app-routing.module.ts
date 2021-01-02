import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainIndexComponent } from './main-index/main-index.component';
import { SillasComponent } from './sillas/sillas.component';
import { DonarComponent } from './donar/donar.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: MainIndexComponent },
  { path: 'sillas', component: SillasComponent },
  { path: 'donar', component: DonarComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: '**', component: MainIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
