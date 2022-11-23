import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ProjectListComponent],
  providers: [],
  exports: [ProjectListComponent]
})
export class ProjectListComponentModule {
}
