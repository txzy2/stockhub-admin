import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VariantsPropertyPipe} from "./pipes/variants-property.pipe";


@NgModule({
  declarations: [
    VariantsPropertyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VariantsPropertyPipe
  ]
})
export class SharedModule {
}
