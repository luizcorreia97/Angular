import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';

import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,

    DropdownModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule
  ],
  declarations: [
    CursosComponent
  ],
  exports: [CursosComponent],
  providers: [ConfirmationService]
})
export class CursosModule { }