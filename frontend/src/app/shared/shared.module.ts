import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatTableModule,
  MatIconModule, MatPaginatorModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalConfirmationComponent } from '@app/shared/components';

@NgModule({
  declarations: [
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // @angular/material
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // @angular/material
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  entryComponents: [
    ModalConfirmationComponent
  ]
})
export class AppSharedModule { }
