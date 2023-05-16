import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SpinComponent } from './spin/spin.component';

const routes: Routes = [{
  path:'',
  component:DemoComponent
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
