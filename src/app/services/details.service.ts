import { Details } from './../models/details';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class DetailsService {

  private basePath = '/details';
  public details: any;
  public selectedDetails: Details = new Details();

  constructor(private db: AngularFireDatabase) {
    this.getDetails().subscribe(items => {
      if (items.length < 1) {
        this.addDetails();
      }
    });
  }

  addDetails() {
    this.db.list(this.basePath).push({
      person: '',
      restaurant: '',
      link: '',
      info: '',
      deadline: ''
    });
  }

  getDetails(): Observable<any[]> {
    return this.db.list(this.basePath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  updateDetails(details: Details) {
    this.db.list(this.basePath).update(details.$key, {
      person: details.person,
      restaurant: details.restaurant,
      link: details.link,
      info: details.info,
      deadline: details.deadline
    });
  }

}
