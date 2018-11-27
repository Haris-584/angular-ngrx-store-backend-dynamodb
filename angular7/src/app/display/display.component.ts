import { thread } from './../display/thread.model';
import { Component, OnInit } from '@angular/core';
//import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // coins: Observable<Blockchain[]>;
  // constructor(private store: Store<AppState>) {
  //   this.coins = this.store.select(state => state.blockchain);
  //  }
  constructor(private bs: DataService) { }

  threads : thread[];
  ngOnInit() {
    this.bs
      .getdata()
      .subscribe((data: thread[]) => {
        this.threads = data;
    });

  }

}