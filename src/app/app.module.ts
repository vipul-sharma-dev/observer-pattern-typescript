import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookShopComponent } from './book-shop/book-shop.component';
import { CustomerComponent } from './customer/customer.component';
import { AbstractSubject } from './interfaces/abstract-subject';
import { BookShopWithRxjsSubject } from './book-shop/concrete-implementation/book-shop.rxjs-subject.model';
import { BookShopWithRxjsBehaviorSubject } from './book-shop/concrete-implementation/book-shop.rxjs-behaviorsubject.model';
import { BookShopWithRxjsReplaySubject } from './book-shop/concrete-implementation/book-shop.rxjs-replaysubject.model';
import { BookShopWithClassicalApproach } from './book-shop/concrete-implementation/book-shop.classical-approach.model';


@NgModule({
  declarations: [
    AppComponent,
    BookShopComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Inject implementation done by using RxJS ReplaySubject
  providers: [{
    provide: AbstractSubject,
    useClass: BookShopWithRxjsReplaySubject
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
