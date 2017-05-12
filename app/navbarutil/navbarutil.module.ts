import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarUtilComponent } from './navbarutil.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavBarUtilComponent ],
    exports: [ NavBarUtilComponent ]
})

export class NavBarUtilModule {}
