import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private ProductService: ProductService){}
  ngOnInit(): void {
    this.ProductService.showOnConsole('teste...')
  }
}
