import { Injectable } from "@angular/core";

export abstract class AbstractObserver {
  abstract update(magazine: string) : void;
}
