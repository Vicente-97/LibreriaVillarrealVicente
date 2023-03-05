import { Categories } from './categoriesInterface';
export interface Books{
    isbn:string;
    title:String;
    dateBook:Date;
    author: String;
    price: number;
    stock:Number;
    quantity:number
    category:Categories
    
    img:String
}