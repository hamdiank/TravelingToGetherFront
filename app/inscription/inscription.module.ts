import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import {InscriptionComponent }  from './inscription.component';

=======
import {FormsModule}from '@angular/forms';
import {InscriptionComponent }  from './inscription.component';
import{NgForm} from '@angular/forms';
>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [InscriptionComponent ],
<<<<<<< HEAD
  exports: [InscriptionComponent],
  
=======
  exports: [InscriptionComponent]
>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904
})
export class InscriptionModule {}