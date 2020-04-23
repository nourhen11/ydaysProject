import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  panier = JSON.parse(localStorage.getItem('product'))
  total =0
  constructor() { }

  ngOnInit(): void {
    this.panier.forEach(element =>this.total= this.total +element.price);
    console.log(this.total)
  }
  removeProduct(product){
    for(let index = 0; index < this.panier.length; index++)
    {
        if(this.panier[index].title == product.title)
        {
            this.panier.splice(index, 1);
            localStorage.setItem('product', JSON.stringify(this.panier))
        }
    }
  }

}
