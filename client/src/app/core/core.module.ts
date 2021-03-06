import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';
import { AuthService } from './services/auth.service';
import { CartsService } from './services/carts.service';
import { OrdersService } from './services/orders.service';
import { AddressesService } from './services/addresses.service';

import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

import { TokenInterceptorService } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    ApiService,
    JwtService,
    AuthService,
    CartsService,
    OrdersService,
    AddressesService,
    AuthGuardService,
    RoleGuardService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
