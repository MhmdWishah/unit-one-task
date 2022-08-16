import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from 'src/pages/home/home.module';

const routes: Routes = [
  {
    path: 'home',
      loadChildren: () => import('../../src/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('../../src/pages/orders/orders.module').then(m => m.OrdersModule),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
