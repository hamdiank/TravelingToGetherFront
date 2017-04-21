import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarUtilComponent } from './navbarutil.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarUtilComponent ],
    exports: [ NavbarUtilComponent ]
})

export class NavbarUtilModule {}
