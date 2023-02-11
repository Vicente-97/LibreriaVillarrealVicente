import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interfaces/categoriesInterface';
import { CategoryService } from '../services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 public categories: Categories[]=[];
 
  constructor(private categoriesServ: CategoryService) { }

  ngOnInit(): void {
    this.getCategoriesInit()
  }

  getCategoriesInit() {
    this.categoriesServ.getCategories()
      .subscribe({
        next: resp => this.categories = resp,
        error: (error) => console.log(error)
      })
  }

}
