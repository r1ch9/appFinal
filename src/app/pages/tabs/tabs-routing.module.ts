import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'locations',
        loadChildren: () => import('../locations/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('../weather/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/locations',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/locations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
