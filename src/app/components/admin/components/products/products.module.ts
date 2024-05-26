import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { TableModalComponent } from './components/table-modal/table-modal.component';
import { PhotoModalComponent } from './components/photo-modal/photo-modal.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent, CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsFilterComponent,
    TableModalComponent,
    PhotoModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
})
export class ProductsModule { }
