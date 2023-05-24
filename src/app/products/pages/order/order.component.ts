import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase:boolean = false;
  public orderBy?:keyof Hero;
  public heroes:Hero[] = [
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Daredevil',
      canFly:false,
      color:Color.red
    },
    {
      name:'Beast Boy',
      canFly:false,
      color:Color.green
    },
    {
      name:'Iron Man',
      canFly:true,
      color:Color.red
    },
  ]

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value:keyof Hero){
    this.orderBy =value;
  }

}
