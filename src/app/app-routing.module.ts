import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { ComingSoonComponentComponent } from './coming-soon-component/coming-soon-component.component';

const routes: Routes = [
//  {path: '', component: AppModule},
  {path: 'Coming-Soon', component: ComingSoonComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
