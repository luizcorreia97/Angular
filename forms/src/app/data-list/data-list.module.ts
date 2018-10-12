import { NgModule } from '@angular/core';
import { DataListComponent } from './data-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DataListComponent]
})
export class DataListModule { }
