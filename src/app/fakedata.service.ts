import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {
  constructor() { }

  get MagazineName(): string {
    return faker.company.companyName();
  }
}
