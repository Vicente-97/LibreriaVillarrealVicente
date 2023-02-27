import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-list ',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {
  public books :Books[]=[]
  public booksFullDatos:Books[]=[]
 
  filtroNombre!: string;
 
  constructor(private bookServ : BooksService) { }

  
  filtrar() {
    if(this.filtroNombre.trim().length!=0){
      this.books = this.books.filter(dato => dato.title.toLowerCase().includes(this.filtroNombre.toLowerCase()));
    }else{
      this.books=this.booksFullDatos
    }
  }

  ngOnInit(): void {
   this.getBooks()
   console.log("peticion")

   

  }

  getBooks(){
    this.bookServ.getBooks().subscribe({
      next: (resp)=> {this.books=resp
        this.booksFullDatos=resp
      }
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

    



