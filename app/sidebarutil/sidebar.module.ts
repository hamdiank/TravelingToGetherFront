import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarUtilComponent } from './sidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarUtilComponent ],
    exports: [ SidebarUtilComponent ]
})

export class SidebarUtilModule {}
