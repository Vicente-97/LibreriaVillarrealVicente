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

  


  ngOnInit(): void {
   this.getBooks()
   
   
  //  this.cols = [
  //   { field: 'isbn', header: 'ISBN' },
  //   { field: 'img', header: 'Imagen' },
  //   { field: 'title', header: 'Title' },
  //   { field: 'dateBook', header: 'dateBook' },
  //   { field: 'author', header: 'Autor' },
  //   { field: 'price', header: 'Precio' },
  //   { field: 'stock', header: 'Stock' }
  //  ]
   
  }

  getBooks(){
    this.bookServ.getBooks().subscribe({
      next: (resp)=> this.books=resp
    })

  }

   
    selected! :any[];

    onSelect({ selected }:any) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
    }

    onActivate(event:any) {
      console.log(event);
    }

     }

    



