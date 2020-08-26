import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameCompany= 'marketing digital';
  titulo = 'package';
  date = new Date();
  currency = 100;
  month='Month';
}
