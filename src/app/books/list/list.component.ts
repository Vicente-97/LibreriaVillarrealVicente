import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public books :Books[]=[]

  constructor(private bookServ : BooksService) { }

  ngOnInit(): void {
    this.getBooks()

  }

  getBooks(){
    this.bookServ.getBooks().subscribe({
      next: resp => this.books = resp,
      error: (error) => console.log(error)
    })

    }
  }
