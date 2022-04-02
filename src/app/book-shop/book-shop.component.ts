import { FakedataService } from './../fakedata.service';
import { Component, OnInit } from '@angular/core';
import { AbstractSubject } from '../interfaces/abstract-subject';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.scss']
})
export class BookShopComponent implements OnInit {

  private magazines: Array<string> = new Array<string>();

  get Magazines() : Array<string> {
    return this.magazines;
  }

  constructor(private subject: AbstractSubject, private faker: FakedataService) {
  }

  ngOnInit(): void {
  }

  publishMagazine() : void {
    const newMagazine = this.faker.MagazineName; // generate random name
    this.magazines.splice(0, 0, newMagazine);
    this.subject.notify(newMagazine);
  }
}
