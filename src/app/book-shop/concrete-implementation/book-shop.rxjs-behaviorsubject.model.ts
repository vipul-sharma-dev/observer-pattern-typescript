import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Subscription } from "rxjs/internal/Subscription";
import { AbstractObserver } from "src/app/interfaces/abstract-observer";
import { AbstractSubject } from "src/app/interfaces/abstract-subject";

export class BookShopWithRxjsBehaviorSubject extends AbstractSubject {

  // Observable - BehaviorSubject
  private magazineBehaviorSubject: BehaviorSubject<string>
  = new BehaviorSubject<string>("");

  // Collection of Observervable and corresponding Subscription
  private observerSubscriptionMap: Map<AbstractObserver, Subscription>
  = new Map<AbstractObserver, Subscription>();

  // Subscribe to the observable
  subscribe(observer: AbstractObserver): void {
    if(this.observerSubscriptionMap.has(observer) === false) {
      const subscription = this.magazineBehaviorSubject
        .subscribe(m => observer.update(m));
      this.observerSubscriptionMap.set(observer, subscription);
    }
  }

  // Unsubscribe from the observable
  unsubscribe(observer: AbstractObserver): void {
    if(this.observerSubscriptionMap.has(observer)) {
      this.observerSubscriptionMap.get(observer)?.unsubscribe();
      this.observerSubscriptionMap.delete(observer);
    }
  }

  // emit new value via observable
  notify(data: string): void {
    this.magazineBehaviorSubject.next(data);
  }
}
