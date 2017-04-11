import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}from '@angular/forms';
import {InscriptionComponent }  from './inscription.component';
import{NgForm} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [InscriptionComponent ],
  exports: [InscriptionComponent]
})
export class InscriptionModule {}