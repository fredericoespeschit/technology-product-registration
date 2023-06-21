import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    name: 'Produto de Teste',
    price: 125.98
  }
  constructor(private ProductService: ProductService,
    private router: Router) { }
  
  ngOnInit(): void {

  }

  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() => {
      this.ProductService.showMessage('Produto salvo!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
