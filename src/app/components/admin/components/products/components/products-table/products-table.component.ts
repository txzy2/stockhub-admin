import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {Product} from '../../../../../../../shared/types/types';
import {TableModalComponent} from '../table-modal/table-modal.component';
import {PhotoModalComponent} from "../photo-modal/photo-modal.component";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss',
})
export class ProductsTableComponent {
  @Input() products$: Observable<Product[]> | undefined;
  public selectItem: string = '';

  constructor(public dialog: MatDialog) {
  }

  selectedItem(product: Product) {
    this.selectItem = product.id;
  }

  openModal(product: Product) {
    const dialogRef = this.dialog.open(TableModalComponent, {
      width: '30%',
      data: product,
    });

    dialogRef.afterClosed();
  }

  openModalPhoto(photos: string[]) {
    const photoModal = this.dialog.open(PhotoModalComponent, {
      width: '30%',
      data: photos
    })
  }
}
