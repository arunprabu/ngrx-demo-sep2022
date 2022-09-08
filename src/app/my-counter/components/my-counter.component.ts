import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styles: [
  ]
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor( private store: Store<{count: number}>) { 
    // let's get the counter data from the store
    this.count$ = this.store.select('count'); // to subscribe the store data
    console.log(this.count$);
  }

  ngOnInit(): void {
  }

  handleIncrement(){
    // Dispatch an increment action 
    this.store.dispatch(increment())
  }

  handleDecrement(){
    // Dispatch a Decrement action 
    this.store.dispatch(decrement())
  }

  handleReset(){
    // Dispatch a Reset action 
    this.store.dispatch(reset())
  }
}
