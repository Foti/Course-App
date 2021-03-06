import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  // selector: 'tfc-products',
  moduleId: module.id,  // automatic available by using systemjs
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle:string = 'Product List';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    errorMessage :string;
    products: IProduct[];

    constructor(private _productService: ProductService){

    }

    ngOnInit(){
        this._productService.getProducts()
        .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
    }

    toggleImage():void{
        this.showImage = !this.showImage; 
    }

    onRatingClicked(message:string){
        this.pageTitle = 'Product List: ' + message;
    }
}