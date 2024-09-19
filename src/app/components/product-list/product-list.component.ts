import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private crudService: CrudService, private authService: AuthService,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.crudService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string): void {
    this.crudService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
