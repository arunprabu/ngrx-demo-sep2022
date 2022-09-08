import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/components/my-counter.component';
import { counterReducer } from './my-counter/counter.reducer';

// We need to setup store here
const store = {
  count: counterReducer
}

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(store) // setting up the store available app-wide
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
