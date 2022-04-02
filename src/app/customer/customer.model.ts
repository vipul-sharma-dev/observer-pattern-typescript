import { AbstractSubject } from '../interfaces/abstract-subject';
import { AbstractObserver } from '../interfaces/abstract-observer';

export class Customer extends AbstractObserver {
  // Store list of books received
  private magazines: Array<string> = new Array<string>();

  // Used to display either Subscribe or Unsubscribe option in UI
  hasSubscription: boolean = false;

  // Used to display list of books used.
  get Magazines() : Array<string> {
    return this.magazines;
  }

  constructor(public name: string, private subject: AbstractSubject) {
    super();
  }

  // This method is called when a new magazine is published.
  update(magazine: string): void {
    if(this.magazines.includes(magazine) === false) {
      this.magazines.splice(0, 0, magazine);
    }
  }

  // This method is called when customer wants to start the subscription.
  onSubscribe() : void {
    this.hasSubscription = true;
    this.subject.subscribe(this);
  }

  // This method is called when customer wants to stop the subscription.
  onUnsubscribe() : void{
    this.hasSubscription = false;
    this.subject.unsubscribe(this);
  }
}
