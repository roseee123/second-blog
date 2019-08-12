import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppConfig } from './app.config';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [AppConfig]
})
export class ShareModule { }
