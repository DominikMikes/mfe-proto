import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
// import { UiMenuModule } from '@mfe-proto/ui/menu';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AngularMaterialModule } from '@mfe-proto/angular-material';

@NgModule({
  declarations: [RemoteEntryComponent, NavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavbarComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
