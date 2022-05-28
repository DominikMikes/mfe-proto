import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { UiMenuModule } from '@mfe-proto/ui/menu';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    UiMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
