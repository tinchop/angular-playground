import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { YesterdayComponent } from './yesterday/yesterday.component';


const routes: Routes = [

  { path: 'yesterday-component', component: YesterdayComponent },
  { path: 'today-component', component: TodayComponent },
  { path: 'tomorrow-component', component: TomorrowComponent },
  { path: '', redirectTo: '/today-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
