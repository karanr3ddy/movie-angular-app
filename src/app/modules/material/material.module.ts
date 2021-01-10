import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatRippleModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
