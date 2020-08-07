import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { BookStateService } from './+state/book-state.service';

@Component({
  selector: 'ngrx-data-experiment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';
  entities$; //: Observable<Dictionary<DummyEntity>>;
  selected$; // : Observable<DummyEntity>;
  counter = 0;
  inputId: string;

  constructor(private bookState: BookStateService) {}

  ngOnInit() {
    this.entities$ = this.bookState.entities$;
    // this.selected$ = this.bookState.
  }

  addRec() {
    this.bookState.upsertOneInCache({
      id: this.inputId,
      title: 'some title ' + this.counter,
    });

    this.counter++;
  }

  select() {
    console.log('nothing happening at the moment');
    // this.dummyState.dispatch(
    //   this.dummyState.dummyActions.setSelected({ selectedId: this.inputId })
    // );
  }
}
