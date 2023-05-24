import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameUpper:string = 'aLfOnsO';
  public nameLower:string = 'aLfOnsO';
  public fullName:string = 'aLfOnsO mOREnO';
  public customDate:Date = new Date();
}
