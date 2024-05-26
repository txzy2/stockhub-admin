import {Component} from '@angular/core';
import {HttpsService} from '../../../../../shared/api/https.service';
import {Product, ProductRequestAdd} from '../../../../../shared/types/types';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  protected readonly parseInt = parseInt;

  private data = {
    var: 'shoe',
  };
  private url: string = 'product/getAll';

  products$: Observable<Product[]> = this.httpsService
    .postData(this.data, this.url)
    .pipe(map((products: Product[]) => products));

  constructor(private httpsService: HttpsService) {
  }

  getValue(values: ProductRequestAdd) {
    for (const key of Object.keys(values) as Array<keyof ProductRequestAdd>) {
      if (!values[key]) {
        return alert('Не все данные были заполнены');
      }
    }

    const url = 'product/add';
    this.httpsService.postData(values, url)
  }

}
