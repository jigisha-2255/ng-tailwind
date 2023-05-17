import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SpinComponent } from './spin/spin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',
  component:DemoComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'spin',
  component:SpinComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
