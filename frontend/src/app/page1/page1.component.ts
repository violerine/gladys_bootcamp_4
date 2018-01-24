import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  file : File;
  productList = []
  
  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  this.loadproductList()

  }

  loadproductList(){
;
    let header = new Headers()
    let options = new RequestOptions({ headers : header });

    this.http.get("http://localhost:7000/api/product/", options)
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {
        
      }
    );
  }

  fileChange($event){
    this.file = $event.target.files[0];
  }

  SaveProductData(f : NgForm){
    if( f.value.name != "" && f.value.name != null && this.file != null){

      
      let formData = new FormData();
      formData.append("name", f.value.name);
      formData.append("description", f.value.description);
      formData.append("variant", f.value.variant);
      formData.append("price", f.value.price);
      formData.append("color", f.value.color);
      formData.append("image", this.file);

      let header = new Headers();
      let options = new RequestOptions({ headers : header });

      this.http.post("http://localhost:7000/api/product/post", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          this.loadproductList();
          f.reset();
        },
        error => {
          console.log(error);
        },
      );

      

    }
    else{
      console.log("error")
    }
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
