import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  element: any;
  constructor() {}

  ngOnInit(): void {
    this.productList = products;
    this.element = document.querySelector('div.row');
  }
  gridView(): void {
    this.element.classList.remove('listView');
    this.element.classList.add('gridView');
  }
  listView(): void {
    this.element.classList.remove('gridView');
    this.element.classList.add('listView');
  }
  filterPrice(): void {
    const filter = (<HTMLInputElement>document.getElementById('price')).value;
    this.productList.sort(this.compareValues('Price', filter));
  }
  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
}
