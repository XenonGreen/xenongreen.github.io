import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponentComponent } from './coming-soon-component/coming-soon-component.component';

const routes: Routes = [
  {path: 'Coming-Soon', component: ComingSoonComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
