import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { AngularMaterialModule } from '@mfe-proto/angular-material';
import { GridComponent } from '../components/grid/grid.component';

@NgModule({
  declarations: [RemoteEntryComponent, GridComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
