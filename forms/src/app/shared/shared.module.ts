import { HttpModule } from '@angular/http';
import { DropdownService } from './services/dropdown.service';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskModule } from 'soft-angular-mask';
import { DataListComponent } from '../data-list/data-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaskModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    DataListComponent
  ],
  exports:[
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FormDebugComponent,
    CampoControlErroComponent,
    DataListComponent
  ],
  providers:[
    DropdownService
  ]
})
export class SharedModule { }
