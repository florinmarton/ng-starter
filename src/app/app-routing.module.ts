import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'factory', loadChildren: () => import('./factory/factory.module').then(m => m.FactoryModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/home' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // might change the strategy in the future with a custom
  exports: [RouterModule]
})
export class AppRoutingModule { }
