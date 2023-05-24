import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'Alfonso'
  public gender:'male' | 'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa'
    this.gender = 'female'
  }

  //i18nPlural
  public clients:string[] = ['Alfonso','Juan','Pedro','Paloma',
  'Maria','Celia','Hector','Ignacio']
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe

  person = {
    name:'Alfonso',
    age:25,
    address:'Barcelona, Spain'
  }

  //Async Pipe
  public myObservableTimer:Observable<number>= interval(2000).pipe(
    tap(value => console.log('tap : ',value))
  );

  public promiseValue:Promise<string> = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa.')
      this.person.name = 'Otro Nombre';
    },3500)
  })



}
function resolve(arg0: string) {
  throw new Error('Function not implemented.');
}

