import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import { Guid } from 'guid-typescript';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  faBook = faBook;
  books?: Book[];
  form: any;
  showTable: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.books = [];
    this.form = new FormGroup({
      id: new FormControl(1),
      title: new FormControl(),
      authorName: new FormControl(),
      editionYear: new FormControl()
    })
  }


  addBook(): void {
    const book: Book = this.form.value;
    this.books?.push(book);
    console.log('teste', this.books);

    localStorage.setItem("BD", JSON.stringify(this.books));
    //this.form.reset();
    this.showTable = true;
  }

  showBooks(): void {
    if(localStorage.getItem('BD')) {
      this.books = JSON.parse(localStorage.getItem('BD') || '');
    } else {
      this.books = [];
    }
  }

  sortBooks(order: 'ascTitle' | 'ascAuthor' | 'descTitle' | 'descEdition' | 'authorDesc' ): void {
    console.log('books', this.books);
    const values = JSON.stringify(this.books);
    const orderByTitle = Object.keys(values);
    console.log('values', orderByTitle);

    if(order === 'ascTitle'){
      return
    }

  }

}
