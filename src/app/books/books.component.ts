import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import { Guid } from 'guid-typescript';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  books?: Book[];
  form: any;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      authorName: new FormControl(),
      editionYear: new FormControl()
    })
  }

}
