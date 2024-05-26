import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Product} from '../../../../../../../shared/types/types';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrl: './table-modal.component.scss',
})
export class TableModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
  }

  // TODO: Сделать отпраление данных на сервер, прописать типы отпраленных данных
}
