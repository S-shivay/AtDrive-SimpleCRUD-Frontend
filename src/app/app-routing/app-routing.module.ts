import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ProductListComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'add', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' } // Default to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
