import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private ProductService: ProductService,
    private router: Router ){}
  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.ProductService.showMessage('Produto salvo!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
