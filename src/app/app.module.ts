import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { BurguerBuilderComponent } from './burguer-builder/burguer-builder.component';
import { FormsModule } from '@angular/forms';
import { BurguerService } from './services/burguer.service';
import { BurguerListComponent } from './burguer-list/burguer-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    BurguerBuilderComponent,
    BurguerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BurguerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
