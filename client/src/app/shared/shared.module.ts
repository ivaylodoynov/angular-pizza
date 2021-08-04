import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PreloaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
