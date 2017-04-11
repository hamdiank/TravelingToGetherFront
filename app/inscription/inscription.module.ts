import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {InscriptionComponent }  from './inscription.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [InscriptionComponent ],
  exports: [InscriptionComponent],
  
})
export class InscriptionModule {}