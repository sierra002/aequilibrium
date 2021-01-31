import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";
import {CastleLocation} from "../models/castle-location";


@Injectable({
  providedIn: 'root'
})
export class CastleService {
  private subject = new BehaviorSubject<boolean>(null)

  constructor() {
  }

  picksAndValleys(array: []) : CastleLocation {
    const result = {
      peak: 0,
      valley: 0,
    }
    let previousVal = null;
    const subscription = this.subject.asObservable().pipe(distinctUntilChanged())
      .subscribe((value) => {
        if (previousVal === null) {
          previousVal = value;
          return;
        }
        if (previousVal && !value) {
          result.peak++;
        } else {
          result.valley++;
        }
        previousVal = value;
      })
    this.searchInTheArray(array, result)
    subscription.unsubscribe();
    this.subject.next(null)
    return result;
  }

  private searchInTheArray(array, result) {
    array.forEach((value, index, array) => {
      if (array.length === 1) {
        result.pick++;
      }
      let nextI = index + 1;
      if (nextI < array.length) {
        const sign = Math.sign(array[nextI] - value);
        this.subject.next(sign === 1 ? true : sign === 0 ? this.subject.value : false);
      }
    })
  }

}
