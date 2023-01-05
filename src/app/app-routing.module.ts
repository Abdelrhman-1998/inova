import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'home',children:[
    {path:'listView',component:ListViewComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
