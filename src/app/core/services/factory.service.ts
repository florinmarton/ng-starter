import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFactory } from 'src/app/shared/interfaces';
import { FactoryStoreService } from '../store/factory-store.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FactoryService extends DataService<IFactory>  {
  constructor(http: HttpClient, public store: FactoryStoreService) {
    super(http, '/factories');
    console.log('------------------Factory Service Constructor-----------------------');
  }

  getFactories() {
    this.getAll().subscribe(factories => this.store.setState({ factories }));
  }
}
