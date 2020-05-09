import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Angular Master Class : Assignment 2 : T Shirt App";

  products: IProduct[];
  productImageWidth = 40;
  productImageHeight = 50;
  changeImage: boolean;
  searchPrice: number;

  ngOnInit() {
    this.products = this.getProducts();
  }

  flipImage(e, imgurl) {
    e.currentTarget.src = imgurl;
  }
  getProducts() {
    return [
      {
        productId: 1,
        imgUrlFront: "assets/images/allensollyf.jpeg",
        imgUrlBack: "assets/images/allensollyb.jpeg",
        productName: "Allen Solly",
        price: 560,
        qty: 340,
      },
      {
        productId: 2,
        imgUrlFront: "assets/images/patchef.jpeg",
        imgUrlBack: "assets/images/patcheb.jpeg",
        productName: "Patche",
        price: 260,
        qty: 40,
      },
      {
        productId: 3,
        imgUrlFront: "assets/images/peterenglandf.jpeg",
        imgUrlBack: "assets/images/peterenglandb.jpeg",
        productName: "Peter England",
        price: 450,
        qty: 140,
      },
      {
        productId: 4,
        imgUrlFront: "assets/images/pumaf.jpeg",
        imgUrlBack: "assets/images/pumab.jpeg",
        productName: "Puma",
        price: 500,
        qty: 240,
      },
      {
        productId: 5,
        imgUrlFront: "assets/images/tnxf.jpeg",
        imgUrlBack: "assets/images/tnxb.jpeg",
        productName: "T.N.X",
        price: 250,
        qty: 95,
      },
    ];
  }
}
