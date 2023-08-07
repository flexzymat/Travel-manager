import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PagesComponent } from './pages/pages.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { ClientComponent } from './pages/client/client.component';
import { ClientProfileComponent } from './pages/client-profile/client-profile.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    PagesComponent,
    WorkspaceComponent,
    ClientComponent,
    ClientProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule
  ]
})
export class MainModule { }
