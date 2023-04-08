import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlashComponent } from './slash.component';
import { AddModalComponent } from 'src/app/components/add-modal/add-modal.component';
import { ContactCardComponent } from 'src/app/components/contact-card/contact-card.component';
import { ContactsServices } from 'src/app/core/services/contacts.service';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
const routes: Routes = [
    { path: '', component: SlashComponent },
    { path: '**', redirectTo: '' }
  ];
  
@NgModule({
  declarations: [
    SlashComponent,
    ContactCardComponent,
    AddModalComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [ContactsServices],
  bootstrap: [],
})
export class SlashModule { }
