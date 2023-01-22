import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageMenuComponent } from './page-menu.component';



@NgModule({
  declarations: [PageMenuComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ],
  exports:[
    PageMenuComponent
  ]
})
export class PageMenuModule { }
