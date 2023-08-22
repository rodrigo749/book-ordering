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
  books?: Book[] = [];
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
    localStorage.setItem("BD", JSON.stringify(this.books));
    this.form.reset();
    this.showTable = true;
  }

  showBooks(): void {
    for (var i = 0; i < localStorage.length; i++) {
      if(localStorage.getItem('BD')) {
        this.books = JSON.parse(localStorage.getItem('BD') || '' );
      } else {
        this.books = [];
      }
    }

  }

  sortByTitle(): any {
    if(localStorage.getItem('BD')) {
      this.books = JSON.parse(localStorage.getItem('BD') || '' );
    }
    this.books?.sort((a, b) => {
      if(a.title && b.title) {
        return (a.title as string).localeCompare(b.title as string)
      }
    return 0
    })
  }

  sortByAuthor(): any {
    if(localStorage.getItem('BD')) {
      this.books = JSON.parse(localStorage.getItem('BD') || '' );
    }
    this.books?.sort((a, b) => {
      if(a.authorName && b.authorName) {
        return (a.authorName as string).localeCompare(b.authorName as string)
      }
    return 0
    })
  }

  sortByTitleDesc(): any {
    if(localStorage.getItem('BD')) {
      this.books = JSON.parse(localStorage.getItem('BD') || '' );
    }
    this.books?.sort((bookA, bookB) => (bookB.editionYear as number) - (bookA.editionYear as number)) ;
  }

}
