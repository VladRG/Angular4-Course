import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatTableModule,
  MatIconModule, MatPaginatorModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalConfirmationComponent } from '@app/shared/components';
import { CapitalizePipe } from './pipes';
import { HighlightDirective } from '@app/shared/highlight.directive';

@NgModule({
  declarations: [
    ModalConfirmationComponent,

    // Pipes
    CapitalizePipe,

    // Directives
    HighlightDirective
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
    MatDialogModule,
    ReactiveFormsModule
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
    MatDialogModule,
    ReactiveFormsModule,

    // Pipes
    CapitalizePipe,

    // Directives
    HighlightDirective
  ],
  entryComponents: [
    ModalConfirmationComponent
  ]
})
export class AppSharedModule { }
