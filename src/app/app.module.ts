import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LayoutComponent } from './core/layout/layout.component';

import { BuildControlComponent } from './components/burger/build-controls/build-control/build-control.component';
import { BuildControlsComponent } from './components/burger/build-controls/build-controls.component';
import { BurgerBuilderComponent } from './core/burger-builder/burger-builder.component';
import { BurgerComponent } from './components/burger/burger.component';
import { BurgerIngredientComponent } from './components/burger/burger-ingredient/burger-ingredient.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationItemComponent } from './components/navigation-items/navigation-item/navigation-item.component';
import { NavigationItemsComponent } from './components/navigation-items/navigation-items.component';
import { OrderSummaryComponent } from './components/burger/order-summary/order-summary.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildControlComponent,
    BuildControlsComponent,
    BurgerBuilderComponent,
    BurgerComponent,
    BurgerIngredientComponent,
    LayoutComponent,
    LogoComponent,
    NavigationItemComponent,
    NavigationItemsComponent,
    OrderSummaryComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
