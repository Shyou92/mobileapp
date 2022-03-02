import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';

console.log('Hello form lazy!');
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, LazyRoutingModule, MatButtonModule],
})
export class LazyModule {}
