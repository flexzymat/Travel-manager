import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientProfileComponent } from './main/pages/client-profile/client-profile.component';
import { ClientComponent } from './main/pages/client/client.component';
import { PagesComponent } from './main/pages/pages.component';
import { WorkspaceComponent } from './main/pages/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
