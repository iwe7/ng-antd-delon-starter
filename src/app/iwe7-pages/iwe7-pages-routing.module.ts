import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../iwe7-layout/layout-default/layout-default.component';
// ?c=site&a=entry&do=index&m=iwe7_oauth2&__title=%E9%A6%96%E9%A1%B5%E5%85%A5%E5%8F%A3&version_id=0
const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [{
      path: 'clients',
      loadChildren: './iwe7-oauth-clients/iwe7-oauth-clients.module#Iwe7OauthClientsModule'
    }, {
      path: 'index',
      loadChildren: './iwe7-oauth-clients/iwe7-oauth-clients.module#Iwe7OauthClientsModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Iwe7PagesRoutingModule { }
