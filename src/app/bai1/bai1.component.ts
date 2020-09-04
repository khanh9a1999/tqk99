import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

   constructor() {   ///cách 1
    let x:number = 10;
    let n:number = 10 ;
    let lt:number = 1;
    let s:number = 0;

    for(let i = 1; i <= n; i++){
      lt = lt * x;
      s += lt;
  }
  console.log(s);
   }

  ngOnInit(): void {
  }
  // constructor() { }
  // title="Bài 1:  Tính S(n) = x + x^2 + x^3 + … + x^n";
  // x=10;
  // n=10;
  // S=0;
  // ngOnInit(): void {
    
  //   for( let i=0;i<=(this.n);i++){
  //     this.S=this.S+Math.pow((this.x),(i));
  //   }
  //   console.log(this.S);
  // }

}

