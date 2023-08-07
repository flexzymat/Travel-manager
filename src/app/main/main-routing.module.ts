import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './pages/client-profile/client-profile.component';
import { ClientComponent } from './pages/client/client.component';
import { PagesComponent } from './pages/pages.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: { preload: true },
    children: [
      {
        path: 'workspace',
        component: WorkspaceComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'clientprofile',
        component: ClientProfileComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
