import { Injectable } from "@angular/core";
import { AbstractObserver } from "./abstract-observer";


export abstract class AbstractSubject {
  abstract subscribe(observer: AbstractObserver) : void;
  abstract unsubscribe(observer: AbstractObserver) : void;
  abstract notify(data: string): void;
}
