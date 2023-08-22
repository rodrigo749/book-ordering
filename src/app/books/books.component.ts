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
    this.books = [];
    this.form = new FormGroup({
      title: new FormControl(),
      authorName: new FormControl(),
      editionYear: new FormControl()
    })
  }


  addBook(): void {
    this.form.value.title = Guid.create().toString();
    const book: Book = this.form.value;
    this.books?.push(book);
    localStorage.setItem("BD", JSON.stringify(this.books));
    this.form.reset();
  }

  showBooks(): void {
    if(localStorage.getItem('BD')) {
      this.books = JSON.parse(localStorage.getItem('BD') || '');
    } else {
      this.books = [];
    }
  }

  sortTodos(order: 'asc' | 'desc'): void {
    // this.books.sort((a, b) => {
    //   if (order === 'asc') {
    //     return a.text.localeCompare(b.text);
    //   } else {
    //     return b.text.localeCompare(a.text);
    //   }
    // });
  }

}
