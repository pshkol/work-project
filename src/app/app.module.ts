import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StockComponent } from './stock/stock.component';
import { CuitComponent } from './cuit/cuit.component';

import { StockService } from './services/StockService';

const appRoutes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'cuit', component: CuitComponent },
  { path: '', redirectTo: '/stock', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StockComponent,
    CuitComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [{provide: StockService, useClass: StockService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
