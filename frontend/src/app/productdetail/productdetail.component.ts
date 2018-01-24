import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  file : File;
  productList = []
  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadproductInfo()
  }



  loadproductHK(){
    
    let header = new Headers()
    let options = new RequestOptions({ headers : header });

    this.http.get("http://localhost:7000/api/product/hellokitty", options)
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {
        
      }
    );
  }



  loadproductInfo(){
    
        let header = new Headers()
        let options = new RequestOptions({ headers : header });
    
        this.http.get("http://localhost:7000/api/product/:id", options)
        .subscribe(
          result => {
            this.productList = result.json();
          },
          error => {
            
          }
        );
      }

}
