import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-list ',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public books :Books[]=[]

  constructor(private bookServ : BooksService) { }

  //row!: any[];

  rows = [
    { name: 'John', gender: 'Male', age: 35 },
    { name: 'Jane', gender: 'Female', age: 28 },
    { name: 'Bob', gender: 'Male', age: 42 }
  ];
  columns = [
    { headerName: 'Isbn', field: 'isbn',  minWidth: 500},
    { headerName: 'Title', field: 'model' },
    { headerName: 'dateBook', field: 'dateBook' },
    { headerName: 'author', field: 'author' },
    { headerName: 'price', field: 'price' },
    { headerName: 'stock', field: 'stock' }
  ];

  ngOnInit(): void {
   //this.getBooks()

  }

  // getBooks(){
  //   this.bookServ.getBooks().subscribe((data: any[])=>{
  //     this.rowData = data;
  //   })

  //   }

    selected! :any[];

    onSelect({ selected }:any) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
    }

    onActivate(event:any) {
      console.log(event);
    }
  }

