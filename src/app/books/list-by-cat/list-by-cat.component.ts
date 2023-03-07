import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Books } from '../../interfaces/bookInterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-by-cat',
  templateUrl: './list-by-cat.component.html',
  styleUrls: ['./list-by-cat.component.css']
})
export class ListByCatComponent {

  public books :Books[]=[]
  
  constructor(private route : ActivatedRoute, private servicio:BooksService ) { }


// Lógica sencilla, solo recuperamos el parámetro y obtenemos los libros de una categoría.
  ngOnInit(): void {

    const id=this.route.snapshot.params['id']
    this.servicio.getBooksByCat(id).subscribe({
      next:(resp)=> {
        this.books=resp
      },error:(err)=> {
        
      },
    })

  }

}
