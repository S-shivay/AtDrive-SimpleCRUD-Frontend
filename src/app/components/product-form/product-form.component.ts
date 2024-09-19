import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productData: any = { name: '', price: 0, description: '' };
  productId: string | null = null;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.crudService.getProduct(this.productId).subscribe((data) => {
        this.productData = data;
      });
    }
  }

  submitForm(): void {
    if (this.productId) {
      this.crudService.updateProduct(this.productId, this.productData).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.crudService.createProduct(this.productData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
