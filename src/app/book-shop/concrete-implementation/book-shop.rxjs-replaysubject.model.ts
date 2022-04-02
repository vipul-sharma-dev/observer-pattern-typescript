import { ReplaySubject } from "rxjs/internal/ReplaySubject";
import { Subscription } from "rxjs/internal/Subscription";
import { AbstractObserver } from "src/app/interfaces/abstract-observer";
import { AbstractSubject } from "src/app/interfaces/abstract-subject";

export class BookShopWithRxjsReplaySubject extends AbstractSubject {

  // Observable - ReplaySubject
  private magazineReplaySubject: ReplaySubject<string>
  = new ReplaySubject<string>(3);

  // Collection of Observervable and corresponding Subscription
  private observerSubscriptionMap: Map<AbstractObserver, Subscription>
  = new Map<AbstractObserver, Subscription>();

  // Subscribe to the observable
  subscribe(observer: AbstractObserver): void {
    if(this.observerSubscriptionMap.has(observer) === false) {
      const subscription = this.magazineReplaySubject
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
    this.magazineReplaySubject.next(data);
  }
}
