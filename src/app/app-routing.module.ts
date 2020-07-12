import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


const routes: Routes = [
  { path: 'today-component', component: TodayComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
