import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../core/services/factory.service';
import { FactoryStoreService } from '../core/store/factory-store.service';

@Component({
  selector: 'factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  constructor(private factoryService: FactoryService, private factoryStore: FactoryStoreService) { }

  ngOnInit(): void {
    console.log('Factory: on init');
  }

  getAll() {
    console.log('Get All');
    // this.factoryService.getAll().subscribe(factories => {
    //   console.log('Factories: ', factories);
    // });
    this.factoryService.getFactories();
  }

  create() {
    this.factoryService.create({ id: 999, factoryName: 'Test Factory' }).subscribe();
  }

  read() {
    this.factoryService.getById(999).subscribe(factory => console.log(factory));
  }

  update() {
    this.factoryService.update({ id: 999, factoryName: 'Test Factory Updated' }).subscribe();
  }

  delete() {
    this.factoryService.remove(999).subscribe();
  }
}
