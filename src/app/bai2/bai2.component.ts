import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }
x:number;
n:number;
S=1;
giaithua(y:number){
for(let i=1;i<=y;i++)
{
  y*=i;
}
return y
}
  ngOnInit(): void {
    this.x=2;
    this.n=3;
    for(let i=1;i<=(this.n);i++){
      this.S+=Math.pow(-1,(i))*(Math.pow(this.x,i)/this.giaithua(i));
    }
  }

}