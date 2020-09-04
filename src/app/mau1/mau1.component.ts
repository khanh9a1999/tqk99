import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mau1',
  templateUrl: './mau1.component.html',
  styleUrls: ['./mau1.component.css']
})
export class Mau1Component implements OnInit {

  constructor() { 
    // bai mau1
  //   let n = 10;
  //  let s = 0;
  //  for(let i=1;i<=n;++i){
  //     s += 1.0/i;
  //  }
  //  console.log(s);     

  //mau2
  // var list:number[]; 
  // list = [4,11,45,3,13,50,7,60,77];
  // var checkNT = (n:number) => {
  //   let ok = true;
  //   for(let i=2;i<n;++i)
  //   if(n%i==0){
  //     ok=false;
  //     break;
  //   } 
  //   return ok;
  // }
  // let listNT = list.filter(x=>checkNT(x)); 
  // console.log("Các số nguyên tố là : " + listNT );
  }
  

  ngOnInit(): void {
  }

}
export class HCN {
  protected a:number;
  protected b:number;
  constructor(a:number,b:number){
    this.a=a;
    this.b=b;
  }
  public DienTich():number {
    return this.a*this.b;
  }
}
export class HH extends HCN {
  protected h:number;
  constructor(a:number,b:number, h: number){
    super(a,b);
    this.h = h;
  }
  public TheTich():number {
    return this.DienTich()*this.h;
  }
}
var a: number = 5;
var b: number = 6;
var h: number = 3;
var hh = new HH(a,b,h);
console.log(hh.TheTich())

