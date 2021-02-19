import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../core/services/factory.service';
import { FactoryStoreService } from '../core/store/factory-store.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  factoryState: any;
  factories: any[] = [];

  constructor(private factoryService: FactoryService, private factoryStore: FactoryStoreService) {
    console.log('Constructor home');
  }

  ngOnInit(): void {
    this.factoryState = this.factoryStore.stateChanged.subscribe((state) => {
      if (state && state.factories) {
        this.factories = state.factories;
        console.log(state.factories);
      }
    });
  }

  ngOnDestroy() {
    if (this.factoryState) {
      this.factoryState.unsubscribe();
    }
  }
}
