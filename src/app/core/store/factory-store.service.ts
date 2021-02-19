import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';

@Injectable({
  providedIn: 'root'
})
export class FactoryStoreService extends ObservableStore<any> {
  public setState;

  constructor() {
    super({});
    this.setState = super.setState;
    console.log('======================Factory Store Constructor==========================');
  }
}
