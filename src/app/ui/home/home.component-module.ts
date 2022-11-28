import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
