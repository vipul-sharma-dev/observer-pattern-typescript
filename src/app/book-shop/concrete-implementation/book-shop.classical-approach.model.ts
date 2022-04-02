import { Injectable } from "@angular/core";
import { AbstractObserver } from "../../interfaces/abstract-observer";
import { AbstractSubject } from "../../interfaces/abstract-subject";

export class BookShopWithClassicalApproach extends AbstractSubject {

  // collection of all the observers - customers
  private observerCollection: Array<AbstractObserver>
  = new Array<AbstractObserver>();

  // add to the collection of observers
  subscribe(observer: AbstractObserver): void {
    const index = this.observerCollection.indexOf(observer);
    if(index === -1) {
      this.observerCollection.push(observer);
    }
  }

  // remove from the collection of observers
  unsubscribe(observer: AbstractObserver): void {
    const index = this.observerCollection.indexOf(observer);
    if(index !== -1) {
      this.observerCollection.splice(index, 1);
    }
  }

  // notify all the observers
  notify(data: string): void {
    for(let observer of this.observerCollection) {
      observer.update(data);
    }
  }
}
