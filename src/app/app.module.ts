import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductsComponent } from './components/products/products.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ProductsComponent,
    OnlyNumberDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
