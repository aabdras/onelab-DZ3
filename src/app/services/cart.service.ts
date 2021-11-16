import {Injectable, Input} from '@angular/core';
import {Observable} from "rxjs";
import {IDetailsRes} from "../models/forkify.model";

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[]=[]
  constructor(private http: HttpClient) { }
  private url = 'https://forkify-api.herokuapp.com/api';
  addToCart(title: string){
      this.cart.push(title)
  }
  removeFromCart(title: string){
    let index = this.cart.indexOf(title);
    if(index==-1){
      alert("Не найден")
    }
    else {
      this.cart.splice(index,1);
    }
  }
}
